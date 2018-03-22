import { User } from '../models/user';
import { Component, OnInit, Input } from '@angular/core';
import { Login } from '../models/login';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  @Input()user:User;

  constructor(private userService:UserService) { 
    this.user=new User();
    this.user.login=new Login();
  }

  ngOnInit() {
  }

  add_user(){
    this.user.username=this.user.login.username;
    this.userService.add_user(this.user).subscribe((data)=>{
      console.log(data);
    });
  }

}
