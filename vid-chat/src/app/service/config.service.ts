import { Injectable } from '@angular/core';

@Injectable()
export class ConfigService {
  header:any={headers: {'Content-Type': 'application/json; charset=utf-8'}};
  ws_url="wss://10.84.170.212:9900"

  audio_only={
    video:false,
    audio:true
  };

  video_only={
    video:true,
    audio:false
  };

  av={
    video:true,
    audio:true//change this,
    
  };

  private keys={
    AWS:'54.214.115.221',
    AWS_PORT:'9200',
    LOCAL:'localhost',
    L_IP:'192.168.0.5',
    L_PORT:'9900'
  }

  ws_config={
    HOST:this.keys.AWS,
    PORT:this.keys.AWS_PORT,
    PROTO:'wss://'
  };

  static log:boolean=true;
  constructor() { }

}