import { LoginService } from '../service/login.service';
import { Component, OnInit, Output, Input, EventEmitter, ViewChild } from '@angular/core';
import { User } from '../models/user';
import { UserService } from '../service/user.service';
import { Router } from '@angular/router';
import { RtcService } from '../service/rtc.service';

declare var $:any;


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  @Output() friends:Array<User>=new Array();
  @Output() friend_requests:Array<User>=new Array();
  @Output() requests_sent:Array<User>=new Array();
  @Output() emmiter=new EventEmitter<string>();
  call:any;
  ls:any;
  
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

  ngOnInit() {
    let user=this.loginService.user;
    if(user==null){
      this.router.navigateByUrl('login');
    }
    if(!user.sent){
      user.sent=[]
    }
    if(!user.pending){
      user.pending=[];
    }
    //let email:string=this.loginService.user.email;
    this.userService.get_friends(user.username).subscribe((data)=>{
      this.friends=data as Array<User>;
      this.rtcService.register(user.username);
      this.rtcService.updateFriends(user.username,this.friends);
    });
    let pendings=[].concat(user.pending).concat(user.sent);
    this.userService.get_users(pendings).subscribe((data)=>{
      let users=data as Array<User>;
      users.forEach((_user)=>{
        if(user.sent.includes(_user.username)){
          this.requests_sent.push(_user);
        }
        if(user.pending.includes(_user.username)){
          this.friend_requests.push(_user);
        }
      });
    });
  }

  makeCall(user:User){
    this.emmiter.emit(user.username);
  }

  accept_fr(user:User){
    console.log(' called afr '+JSON.stringify(user));
    this.userService.accept_fr(this.loginService.user.username,user.username).subscribe((data)=>{
      console.log(data);
    });
  }
}
