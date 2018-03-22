import { Login } from '../models/login';
import { Component, OnInit, Input } from '@angular/core';
import { LoginService } from '../service/login.service';
import { Router } from '@angular/router';
import { User } from '../models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Input() login:Login;

  constructor(private loginService:LoginService,private router:Router) { 
    this.login=new Login();
  }

  ngOnInit() {
  }

  try_login(){
    console.log(JSON.stringify(this.login));
    this.loginService.check_login(this.login)
      .subscribe((data:any)=>{
        console.log(data);
        if(data.login){
          this.loginService.user=data.user as User;
          console.log('logging in as '+this.loginService.user.username);
          this.router.navigateByUrl('home');
        }
      });
  }

}
