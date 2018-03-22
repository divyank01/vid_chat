//import { User } from '../models/user';
//import { ConfigService } from './config.service';
import { Injectable } from '@angular/core';
import { ConfigService } from '../config.service';
import { User } from '../../models/user';

@Injectable()
export class WssService {

  constructor(private config:ConfigService) { }

  register(user:User,_friends:Array<User>){
    //wss://host:port/peerjs/:id/:email
    let wss_url=this.config.ws_url+'?id='+user+'&uname='+user.username;
    console.log('calling new wss service with url '+wss_url);
    let ws:WebSocket=new WebSocket(wss_url);
    let friends_arr=this.getFriends(_friends);
    let msg={
      'apiId':'REGISTER',
      'friends':friends_arr
    };
    ws.onopen=function(event){
      ws.send(JSON.stringify(msg));   
    };
   

    ws.onmessage=function(event){
      console.log(event.data);
      let msg=JSON.parse(event.data);
      for(let user of _friends){
        msg.online.forEach((_user)=>{
          if(user.username === _user.username){
            user.isOnline=true;
            user=_user.peerId;
          }
        });
        msg.offline.forEach((_user)=>{
          if(user.username === _user.username){
            user.isOnline=false;
            user=null;
          }
        });
      }
    }
  }

  getFriends(_friends:Array<User>){
    let retVal:Array<string>=[]
    for(let friend of _friends){
      retVal.push(friend.username);
    }
    return retVal;
  }

}
