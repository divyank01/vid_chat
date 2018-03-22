var express = require('express');
var router= express.Router();
var mongojs=require('mongojs');
var db = mongojs('**** Nice try ****',['users']);

router.post('/CL',(req,resp,next)=>{
    console.log('hitting post for check login'+req.body.username);
    console.log(req.body);
    db.users.findOne({username:req.body.username},(err,user)=>{
        console.log(JSON.stringify(user));
        if(user && user.login.password===req.body.password){
            delete user.login;
            resp.send(JSON.stringify({'login':true,'user':user}));
        }else{
            resp.send(JSON.stringify({'login':false}));
        }
    });
});

router.post('/AU',(req,resp,next)=>{
    console.log('hitting post for add user');
    console.log(req.body);
    db.users.save(req.body,(err,result)=>{
        console.log(JSON.stringify(result));
    });
    resp.send({"done":true});
});

router.put('/UUPI',(req,resp,next)=>{
    console.log('hitting put to update user with peer id');
    console.log(req.body);
    db.users.update({username:req.body.username},{$set:{peerId:req.body.peerId}},{},()=>{
        console.log("done");
    });
    resp.send({"done":true});
});


router.put('/UU',(req,resp,next)=>{
    console.log('hitting put to update user');
    console.log(req.body);
    db.users.update({username:req.body.username},{$set:
        {
            peerId:req.body.peerId,
            pending:req.body.pending,
            sent:req.body.sent
        }},{},()=>{
        console.log("done");
    });
    resp.send({"done":true});
});


router.get('/GFS/:username',(req,resp,next)=>{
    console.log(JSON.stringify(req.params.username));
    db.users.findOne({username:req.params.username},(err,user)=>{
        console.log(JSON.stringify(user));
        db.users.find({username:{"$in" : user.friends}},(err,users)=>{
            retVal=[];
            if(users){
                users.forEach((usr)=>{
                    let curr={};
                    curr['firstname']=usr.firstname;
                    curr['lastname']=usr.lastname;
                    curr['username']=usr.username;
                    retVal.push(curr);
                });
            }
            resp.json(retVal);
        });
    });
});

router.get('/GU/:pending',(req,resp,next)=>{
    console.log(req.params.pending);
    console.log(JSON.stringify(JSON.parse(req.params.pending)))
    db.users.find({username:{"$in" : JSON.parse(req.params.pending)}},(err,users)=>{
        retVal=[];
        if(users){
            users.forEach((usr)=>{
                let curr={};
                curr['firstname']=usr.firstname;
                curr['lastname']=usr.lastname;
                curr['username']=usr.username;
                retVal.push(curr);
            });
        }
        resp.json(retVal);
    });
});


router.get('/SU/:query',(req,resp,next)=>{
    console.log('searching user with email containing query '+req.params.query);
    let query=req.params.query;
    db.users.find({email:{$regex : ".*"+query+".*"}},(err,users)=>{
        retVal=[];
        if(users){
            users.forEach((usr)=>{
                let curr={};
                curr['firstname']=usr.firstname;
                curr['lastname']=usr.lastname;
                curr['username']=usr.username;
                retVal.push(curr);
            });
        }
        resp.json(retVal);
    });
});

router.get('/SFR/:user/:friend',(req,resp,next)=>{
    console.log(req.params.user+' is sending fr to '+req.params.friend);
    let user=req.params.user;
    let friend=req.params.friend;
    db.users.update({username:user},
        { $addToSet: {sent:{$each:[friend]}}});
    db.users.update({username:friend},
        { $addToSet: {pending:{$each:[user]}}});
    resp.end();
});

router.get('/AFR/:user/:friend',(req,resp,next)=>{
    console.log(req.params.user+' is accepting fr from '+req.params.friend);
    let user=req.params.user;
    let friend=req.params.friend;
    db.users.update({username:user},
        {$pull:{pending:{$in:[friend]}}});
    db.users.update({username:friend},
        {$pull:{sent:{$in:[user]}}});
    db.users.update({username:user},
        {$addToSet:{friends:{$each:[friend]}}});
    db.users.update({username:friend},
        {$addToSet:{friends:{$each:[user]}}});
    resp.end();
});


router.get('/GA',(req,resp,next)=>{
    db.users.find({},(err,user)=>{
        console.log(JSON.stringify(user));
        resp.json(user);
    });
});

module.exports = router;