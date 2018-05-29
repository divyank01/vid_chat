import { ConfigService } from './config.service';
import { RTCEvent } from './rtc_event';
import { Injectable } from '@angular/core';
import { log } from './logging.service';

/**
 * @author Divyank Sharma
 * @description Provides RTC service requires websocket server listening at server side.
 *              User is required to register first with a UUID some thing like a unique 
 *              username is a good option. After setting up peer user can listen for a 
 *              STREAM event and need to to keep litening for an INCOMING event for any 
 *              incoming calls.
 */

@Injectable()
export class RtcService {

  constructor(private configService:ConfigService){}

  /**
   * -------------------------------------------- Setup messaging ----------------------------------------------------
   * 
   */
    
  private WSS_URL:string;
  private ws:WebSocket;
  private username:string;

  register(username:string){
    this.WSS_URL=this.configService.ws_config.PROTO+
                 this.configService.ws_config.HOST+':'+
                 this.configService.ws_config.PORT;
    log('register is called with params '+username);
    if(this.username!=username && this.ws){
      this.ws.close();
      this.username=username;
      this.ws=new WebSocket(this.WSS_URL+'?uname='+username);
    }
    if(!this.ws){
      this.username=username;
      this.ws=new WebSocket(this.WSS_URL+'?uname='+username);
    }
    this.ws.onmessage=this.recv_ws_msg.bind(this);
  }

  private send(msg:string){
    if(this.ws.readyState===this.ws.OPEN){
      this.ws.send(msg);
    }else{
      this.ws.onopen=()=>{
        this.ws.send(msg);
      };
    }
  }

  private recv_ws_msg(msg){
    let data=JSON.parse(msg.data);
    if(data.type==='OFFER_DESC' || data.type==='ANSWER_DESC'){
      this.recv_desc(data);
    }else if(data.type==='ICE'){
      this.ICE_queue.push(data);
    }else if(data.type==='STATUS_UPDATE'){
      this.recv_friends_status(data);
    }else if(data.type==='INCOMING_FR'){
      //u got a new fr ;)
      console.log('got a new fr');
      console.log(msg.data);
      this.handle_incoming_fr(data);
    }else if(data.type==='FR_ACCEPT'){
      //handle accepted fr
      console.log('your fr got accepted by '+data.friend);
      this.handle_accepted_fr(data);
    }else{
      log('error aaya hai on recv_ws_msg');
    }
  }


  //---------------------------------------------------messaging is over -------------------------------------------------


  /**
   * ------------------------------------------------handle rtc peer connection ------------------------------------------
   */


  ice_config = {
    'iceServers': [
      {'urls': 'stun:stun.services.mozilla.com'},
      {'urls': 'stun:stun.l.google.com:19302'}
    ]
  };
  private pc:RTCPeerConnection;
  private callee:string;
  private streams={
    local:null,
    remote:null,
    local_muted:null
  };

  private ICE_queue=[];

  setup_peer(){
    this.pc=new RTCPeerConnection(this.ice_config);
    this.pc.onicecandidate=this.got_new_ice.bind(this);
    this.pc.onaddstream=this.got_remote_stream.bind(this);
    return this.rtcEvent;
  }

  private got_new_ice(event){
    if(event.candidate){
      //send it to remote;
      let msg={
        type:'ICE',
        payload:event.candidate,
        fwdTo:this.callee
      }
      this.send(JSON.stringify(msg));
    }
  }

  private add_new_ice(data){
    log('got ICE');
    this.pc.addIceCandidate(new RTCIceCandidate(data.payload));
  }

  private add_stream(data){
    if(this.pc.signalingState==='closed'){
      this.setup_peer();
    }
    navigator.getUserMedia=( navigator.getUserMedia ||
      navigator.webkitGetUserMedia ||
      navigator.mozGetUserMedia ||
      navigator.msGetUserMedia);
    let evnt=new RTCEvent();
    log(this.pc.iceConnectionState);
    navigator.getUserMedia(
      this.configService.av,
      (local_stream)=>{
        this.pc.addStream(local_stream);
        this.streams.local=local_stream;
        navigator.getUserMedia(
          this.configService.video_only,
          (l_stream)=>{
            this.streams.local_muted=l_stream;
            evnt.emit('GOT_STREAM',data);
          },(error)=>{
            console.log(error);
          }
        )
      },(error)=>{
        console.log(error);
      }
    )
    return evnt;
  }

  private got_remote_stream(event){
    log('received remote stream');
    this.streams.remote=event.stream;//remote_stream;
    this.rtcEvent.emit('STREAM',this.streams);
  }

  call(callee:string){
    log('call is called with username '+this.username+' and callee '+callee);
    this.callee=callee;
    this.add_stream(callee).on('GOT_STREAM',this.get_offer.bind(this,callee));
  }

  private recv_desc(msg){
    if(msg.type==='OFFER_DESC'){
      this.rtcEvent.emit('INCOMING',msg);
    }
    if(msg.type==='ANSWER_DESC'){
      this.pc.setRemoteDescription(new RTCSessionDescription(msg.payload)).then(()=>{
        log('remote is set now and rtciceconnectionstate is '+this.pc.iceConnectionState);
      });  
    }
  }

  private allow_call(msg){
    this.add_stream(msg).on('GOT_STREAM',this.get_answer.bind(this,msg));
  }

  receive_call(data){
    this.allow_call.call(this,data);
  }

  private get_answer(msg){
    log('got answer is called');
    this.pc.setRemoteDescription(new RTCSessionDescription(msg.payload)).then(()=>{
      this.pc.createAnswer().then((answer)=>{
        let new_msg={
          type:'ANSWER_DESC',
          payload:answer,
          fwdTo:msg.from
        };
        this.pc.setLocalDescription(new RTCSessionDescription(answer));
        this.send(JSON.stringify(new_msg));
      });
    }).then(()=>{
      // process ICE candidate now
      this.ICE_queue.forEach((candidate)=>{
        this.add_new_ice(candidate);
      })
    });
  }

  private get_offer(callee){
    this.pc.createOffer({offerToReceiveAudio:1,offerToReceiveVideo:1}).then((offer)=>{      
      let msg={
        type:'OFFER_DESC',
        payload:offer,
        fwdTo:callee,
        from:this.username
      };
      this.pc.setLocalDescription(new RTCSessionDescription(offer));
      this.send(JSON.stringify(msg));
    }).then(()=>{
      // process ICE candidate now
      this.ICE_queue.forEach((candidate)=>{
        this.add_new_ice(candidate);
      })
    });
  }

  hangup(){
    this.pc.close();
  }

  get_listeners(){
    return this.rtcEvent;
  }
  //-------------------------------------------------- RTC part is over -----------------------------------------------------


  /**
   * --------------------------------------------------- Event Emitter ------------------------------------------------------
   */

  private rtcEvent:RTCEvent=new RTCEvent();

  /**
   * emitter is moved to rtc_event.ts
   */
  /**
   * -------------------------------------------------- handle friends -----------------------------------------------------
   */
   private friends;
   private req_sent;
   private req_recv;

   updateFriends(uname:string,friends:any,req_sent,req_recv){
     log('sending friends');
     this.friends=friends;
     this.req_sent=req_sent;
     this.req_recv=req_recv;
     let msg={
       username:uname,
       FRIENDS:friends,
       type:'FRIENDS'
     };
     this.send(JSON.stringify(msg));
   }

   send_fr(user,friend){
    let msg={
      user:user,
      friend:friend,
      type:'SFR'
    };
    this.req_sent.push(friend);
    this.send(JSON.stringify(msg));
   }

   accept_fr(user,friend){
    let msg={
      user:user,
      friend:friend,
      type:'AFR'
    };
    this.friends.push(friend);
    for(let i=0;i<this.req_recv.length;i++){
      if(!this.req_recv[i] || this.req_recv[i].username===friend.username){
        //var index = this.req_recv.indexOf(i, 0);
        //if (index > -1) {
          this.req_recv.splice(i, 1);
        //}
      }
    }
    this.send(JSON.stringify(msg));
   }

   private recv_friends_status(data){
    log('recving friends'+JSON.stringify(data));
    this.friends.forEach((friend)=>{
      data.friends.forEach(d => {
        if(friend.username===d.f_id){
          if(d.state==='ONLINE'){
            friend.isOnline=true;
          }
          if(d.state==='OFFLINE'){
            friend.isOnline=false;
          }
        }
      });
    });
   }

   private handle_incoming_fr(data){
      this.req_recv.push(data.friend);
   }
   
   private handle_accepted_fr(data){
      this.friends.push(data.friend);
      for(let i=0;i<this.req_sent.length;i++){
        if(!this.req_sent[i] || this.req_sent[i].username===data.friend.username){
          //var index = this.req_sent.indexOf(i, 0);
          //if (index > -1) {
            this.req_sent.splice(i, 1);
          //}
        }
      }
   }
}
