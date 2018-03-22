import { User } from '../models/user';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Login } from '../models/login';
import { ConfigService } from './config.service';

@Injectable()
export class LoginService {

  private loggedInUser:User;

  constructor(private http:HttpClient,private config:ConfigService) { }
  
  check_login(login:Login){
      return this.http.post('/api/CL',JSON.stringify(login),this.config.header);
  }

  set user(user:User){
    this.loggedInUser=user;
  }

  get user(){
    return this.loggedInUser;
  }
}