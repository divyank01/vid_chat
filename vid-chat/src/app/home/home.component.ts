import { Component, OnInit, Output, ViewChild, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../service/login.service';
import { UserService } from '../service/user.service';
import { RtcService } from '../service/rtc.service';
import { User } from '../models/user';
import { log } from '../service/logging.service';

declare var Audio:any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit,AfterViewInit {

  @Output() friends:Array<User>=new Array();
  @ViewChild('local') local:any;
  @ViewChild('remote') remote:any;
  @ViewChild('pickup') pick:any;
  @ViewChild('viewChannels') vc:any;
  @Output() incoming:boolean=true;
  @Output() onCall:boolean=false;
  @Output() caller:string;

  streams:any;
  call:any;
  ls:any;
  user:User;
  muted:boolean=false;


  constructor(private userService:UserService,
    private loginService:LoginService,
    private router:Router,
    private rtcService:RtcService) {}
  
  dummy_user(){
    let user:User=new User();
    user.username='divyank01';
    user.email='divyank01@gmail.com';
    this.loginService.user=user;
    return user;
  }

  ngAfterViewInit() {
  }

  ngOnInit() {
    let user=this.loginService.user;
    if(!user){
      this.router.navigateByUrl('login');
    }
    this.user=this.loginService.user;
    this.rtcService.setup_peer();
    this.rtcService.get_listeners().on('INCOMING',(data)=>{
      this.setup_click_listeners(data);
    });
    this.rtcService.get_listeners().on('STREAM',(streams)=>{
      this.streams=streams;
      this.remote.nativeElement.src=URL.createObjectURL(streams.remote);
      this.local.nativeElement.src=URL.createObjectURL(streams.local_muted);
    });
  }

  setup_click_listeners(data){
    let aud=new Audio('assets/audio/call.mp3');
    aud.loop=true;
    aud.play();
    this.incoming=false;
    this.onCall=true;
    this.caller=data.from;
    this.pick.nativeElement.innerHTML=this.pick.nativeElement.innerHTML+'<br/>Getting call from '+data.from;
    this.pick.nativeElement.addEventListener('click',this.rtcService.receive_call.bind(this.rtcService,data));
    this.pick.nativeElement.addEventListener('click',()=>{
      this.incoming=true;
      aud.pause();
    });
  }

  hangup(){
    this.rtcService.hangup();
    this.streams.remote.getTracks().forEach((track)=>{
      track.stop();
    });
    this.streams.local.getTracks().forEach((track)=>{
      track.stop();
    });
    this.streams.local_muted.getTracks().forEach((track)=>{
      track.stop();
    })
    this.router.navigateByUrl('home/(side:profile)');
    this.onCall=false;
  }

  send_no_audio(){
    this.streams.local.getAudioTracks
  }

  makeCall(username){
    this.rtcService.setup_peer()
    this.onCall=true;
    this.rtcService.call(username);
  }

  mute(){
    log('mute is called');
    this.muted=!this.muted;
    let remote:MediaStream=this.streams.remote;
    if(this.muted){
      remote.getAudioTracks().forEach(track => {
        track.enabled=false;
        track.addEventListener('track',this.do_mute);
      });
    }else{
      remote.getAudioTracks().forEach(track => {
        track.enabled=true;
        track.removeEventListener('track',this.do_mute);
      });
    }
  }

  private do_mute(track){
    log('on track event listener is called to mute');
    track.enabled=false;
  }

  go_fullscreen(){
    let elem=this.remote.nativeElement;
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.msRequestFullscreen) {
      elem.msRequestFullscreen();
    } else if (elem.mozRequestFullScreen) {
      elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) {
      elem.webkitRequestFullscreen();
    }
  }

}
