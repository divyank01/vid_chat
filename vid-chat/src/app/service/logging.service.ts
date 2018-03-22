import { Injectable } from '@angular/core';
import { ConfigService } from './config.service';

@Injectable()
export class LoggingService {

  constructor() { }
}

export function log(msg:string){
  if(ConfigService.log){
    console.log(msg);
  }
}
