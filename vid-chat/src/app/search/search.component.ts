import { RtcService } from '../service/rtc.service';
import { Component, OnInit, Output, Input } from '@angular/core';
import { UserService } from '../service/user.service';
import { User } from '../models/user';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {


  @Output() results:Array<User>;
  @Input() query:string;

  constructor(private userService:UserService,private loginService:LoginService,private rtcService:RtcService) { }

  ngOnInit() {

  }

  send_friend_request(user:User){
    console.log('sfr '+JSON.stringify(user));
    let loggedin_user={
      username:this.loginService.user.username,
      firstname:this.loginService.user.firstname,
      lastname:this.loginService.user.lastname
    }
    this.rtcService.send_fr(loggedin_user,user);
  }  

  search(){
    this.userService.search_user(this.query).subscribe((data)=>{
      this.results=data as Array<User>;
    });
  }


}
