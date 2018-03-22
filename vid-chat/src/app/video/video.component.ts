import { RtcService } from '../service/rtc.service';
import { LoginService } from '../service/login.service';
import { Component, OnInit, Output, ViewChild } from '@angular/core';
import { User } from '../models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {

  @ViewChild('local') local:any;
  @ViewChild('remote') remote:any;
  @ViewChild('pickup') pick:any;
  @Output() incoming:boolean=true;
  @Output() caller:string;

  user:User
  constructor(private loginService:LoginService,
              private rtcService:RtcService,
              private router:Router) { }

  ngOnInit() {
    this.user=this.loginService.user;
    this.rtcService.setup_peer().on('INCOMING',(data)=>{
      this.incoming=false;
      this.caller=data.from;
      this.pick.nativeElement.innerHTML=this.pick.nativeElement.innerHTML+'<br/>Getting call from '+data.from;
      this.pick.nativeElement.addEventListener('click',this.rtcService.receive_call.bind(this.rtcService,data));
    });

    /*this.rtcService.get_streams().on('STREAM',(streams)=>{
      this.remote.nativeElement.src=URL.createObjectURL(streams.remote);
      this.local.nativeElement.src=URL.createObjectURL(streams.local);
    });*/
  }

  makeCall(user:User){
    console.log(JSON.stringify(user));
    
    this.rtcService.call(user.username);
  }
}
