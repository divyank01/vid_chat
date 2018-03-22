import { Component, OnInit, Output, ViewChild, AfterViewInit } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { RtcService } from '../service/rtc.service';
import { Router } from '@angular/router';
import { LoginService } from '../service/login.service';
import { UserService } from '../service/user.service';
import { User } from '../models/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit, AfterViewInit {

  @Output() friends:Array<User>=new Array();
  @Output() user:any;
  @ViewChild('local') local:any;
  @ViewChild('remote') remote:any;
  @ViewChild('pickup') pick:any;
  @Output() incoming:boolean=true;
  @Output() caller:string;

  call:any;
  ls:any;
  constructor(private userService:UserService,
    private loginService:LoginService,
    private router:Router,
    private rtcService:RtcService) {}
  ngAfterViewInit() {
  }

  ngOnInit() {
    this.user=this.loginService.user;
  }

  pick_up(data){
    
  }

}
