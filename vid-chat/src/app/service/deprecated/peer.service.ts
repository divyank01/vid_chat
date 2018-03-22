import { WssService } from './wss.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import { User } from '../models/user';
import { User } from '../../models/user';

declare var Peer: any;

@Injectable()
export class PeerService {

  peer:any;
  peerId:string;
  constraint:any={
    video:true,
    audio:true
  };

  muted_constraint:any={
    video:true,
    audio:false
  }

  constructor(private http:HttpClient,private wssService:WssService) {
    
  }

  init(user:User,callback:any,friends:Array<User>){
    this.peer=new Peer();
    this.peer.on('open',(id)=>{
      this.peerId=id;
      user=id;
      /*this.__updateUser(user).subscribe((data)=>{
        console.log(data);
      });*/
      this.wssService.register(user,friends);
    });

    

    //recieve a call
    this.peer.on('call',(call)=>{
      //unmute it
      navigator.getUserMedia(this.muted_constraint,
        (stream)=>{
          callback(call,stream);
        },(err)=>{});
    });


    return this.peer;
  }

  makeCall(id:string,callback:any){
    //un mute it
    navigator.getUserMedia(this.muted_constraint,(stream)=>{
      let call:any=this.peer.call(id,stream);
      callback(call);
    },
    (err)=>{

    });
  }


  __updateUser(user:User){
    return this.http.put('/api/UUPI',user);
  }

  userMedia(){
    return (navigator.getUserMedia).bind(navigator)
  }


}
