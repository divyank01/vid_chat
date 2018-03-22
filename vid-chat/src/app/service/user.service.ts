import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from './config.service';
import { User } from '../models/user';
import { LoginService } from './login.service';

@Injectable()
export class UserService {

  constructor(private _http:HttpClient,private config:ConfigService,private login:LoginService) { }
  
  get_friends(username:string){
    return this._http.get('/api/GFS/'+username);
  }

  wss_get_friends(email:string){
    return this._http.get('/api/GFS/'+email);
  }

  search_user(query:string){
    return this._http.get('/api/SU/'+query);
  }

  send_fr(user:string,friend:string){
    return this._http.get('/api/SFR/'+user+'/'+friend);
  }

  accept_fr(user:string,friend:string){
    return this._http.get('/api/AFR/'+user+'/'+friend);
  }
  
  add_user(user:User){
    return this._http.post('/api/AU',user);
  }

  get_users(users:Array<string>){
    return this._http.get('/api/GU/'+JSON.stringify(users));
  }

  updatePeerId(user:User){
    return this._http.put('',user);
  }

  updateUser(user:User){
    return this._http.put('/UU',user);
  }

}
