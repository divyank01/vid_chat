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
    audio:true
  };

  ws_config={
    HOST:'192.168.0.5',
    PORT:'9900',
    PROTO:'wss://'
  };

  static log:boolean=true;
  constructor() { }

}