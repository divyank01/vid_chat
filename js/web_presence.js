const url = require('url');
const dao = require('./dao');
var handler={};

handler.clients={};

handler.configure=function(wss){
    wss.on('connection',(ws,req)=>{
        let map=url.parse(req.url,true);
        let username=map.query.uname;
        console.log('got connection from '+username);
        if(!username){
            console.log('dropping this connection as no user name is provided');
            ws.close();
        }else{
            ws.on('message',handler.__handle_message);
            handler.clients[username]={};
            handler.clients[username]['uname']=username;
            handler.clients[username]['sock']=ws;
        }
        ws.on('error',(err)=>{
            console.log(err);
            if (err.code !== 'ECONNRESET') {
                throw err
            }
        });
    });
    setInterval(handler.__clear_offline,5000);
};

handler.__handle_message=function(msg){
    console.log(msg);
    let data=JSON.parse(msg);
    if(data && (data.type==='OFFER_DESC' || data.type==='ANSWER_DESC' || data.type==='ICE')){
        let client=handler.clients[data.fwdTo];
        if(client){
            let sock=handler.clients[data.fwdTo]['sock'];
            if(sock.readyState===sock.OPEN){
                sock.send(msg);
            }
        }
    }else if(data && data.type==='FRIENDS'){
        console.log('got friends');
        let client=handler.clients[data.username];
        if(client){
            client['FRIENDS']=new Set(data.FRIENDS);
            handler.__inform_friends(client,'ONLINE');
            handler.__inform_user(client);
        }
    }else if(data && data.type==='SFR'){
        let friend=data.friend.username;
        let user=data.user.username;
        dao.send_friend_req(user,friend);
        //update friend
        let f=handler.clients[friend];
        if(f && f['sock']){
            let sock=f['sock'];
            if(sock && sock.readyState===sock.OPEN){
                let msg={
                    friend:data.user,
                    status:'sent',
                    type:'INCOMING_FR'
                }
                sock.send(JSON.stringify(msg));
            }
        }
    }else if(data && data.type==='AFR'){
        let friend=data.friend.username;
        let user=data.user.username;
        dao.accept_fr(user,friend);
        //add each other to their friend lists
        let f=handler.clients[friend];
        let u=handler.clients[user];
        if(f){
            f['FRIENDS'].add(data.user);
        }
        if(u){
            u['FRIENDS'].add(data.friend);
        }
        //update friend
        if(f && f['sock']){
            let sock=f['sock'];
            if(sock && sock.readyState===sock.OPEN){
                let msg={
                    friend:data.user,
                    status:'accpeted',
                    type:'FR_ACCEPT'
                }
                sock.send(JSON.stringify(msg));
            }
        }
        handler.__inform_user(handler.clients[friend]);
        handler.__inform_user(handler.clients[user]);
    }
}

handler.__clear_offline=function(){
    Object.keys(handler.clients).forEach(key=> {
        let client=handler.clients[key];
        var sock=handler.clients[key]['sock'];
        if(sock && sock.readyState != sock.OPEN){
            handler.__inform_friends(client,'OFFLINE');
            console.log('pruning clients current online are '+Object.keys(handler.clients).length);
            delete handler.clients[key];// splice it :(
        }
    });
}

handler.__inform_friends=function(client,status){
    console.log(JSON.stringify(client.uname)+'----->'+status);
    let user=handler.clients[client.uname];
    if(user){
        user['FRIENDS'].forEach((friend)=>{
            let f=handler.clients[friend.username];
            if(f){
                let sock=f['sock'];
                if(sock && sock.readyState === sock.OPEN){
                    console.log('sending updates to '+friend.username)
                    let msg={
                        type:'STATUS_UPDATE',
                        'friends':[{
                            f_id:client.uname,
                            state:status
                        }]
                    };
                    sock.send(JSON.stringify(msg));
                }
            }
        });
    }
}

handler.__inform_user=function(client){
    if(client){
        let retVal={
            type:'STATUS_UPDATE',
            'friends':[]
        }; 
        client['FRIENDS'].forEach((friend)=>{
            console.log(friend.username);
            let f=handler.clients[friend.username];
            if(f){
                let sock=f['sock'];
                if(sock && sock.readyState === sock.OPEN){
                    console.log('sending updates to '+friend.username)
                    let msg={
                        f_id:friend.username,
                        state:'ONLINE'
                    }
                    retVal.friends.push(msg);
                }
            }
        });
        handler.clients[client.uname]['sock'].send(JSON.stringify(retVal));
    }
}

module.exports = handler;