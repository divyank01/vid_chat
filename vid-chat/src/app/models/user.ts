import { Login } from './login';

export class User{
    login:Login;
    firstname:string;
    lastname:string;
    email:string;
    sex:string;
    age:number;
    userid:number;
    isOnline:boolean;
    friends:Array<string>;
    username:string;
    pending:Array<string>=[];
    sent:Array<string>=[];
}