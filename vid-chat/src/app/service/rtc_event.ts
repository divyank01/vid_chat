export class RTCEvent{
    private events;
    constructor(){
        this.events={};
    }
    on(evntName:string,fn){
       this.events[evntName]=fn;
    }
    emit(evntName:string,data){
       console.log(evntName);
       this.events[evntName].call(null,data);
    }
}