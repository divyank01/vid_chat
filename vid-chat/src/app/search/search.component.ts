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

  constructor(private userService:UserService,private loginService:LoginService) { }

  ngOnInit() {

  }

  send_friend_request(user:User){
    console.log('sfr '+JSON.stringify(user));
    
    this.userService.send_fr(this.loginService.user.username,user.username).subscribe((data)=>{
      JSON.stringify(data);
    });
  }  

  search(){
    this.userService.search_user(this.query).subscribe((data)=>{
      this.results=data as Array<User>;
      console.log(JSON.stringify(this.results));
    });
  }


}
