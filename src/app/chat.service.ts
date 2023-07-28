import { Injectable } from '@angular/core';
import { io, Socket} from 'socket.io-client';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  private socket:Socket;
  user:any;
  constructor() { 
    this.setUpSocketConnection();
  }

  setUpSocketConnection(){
    this.socket = io("http://localhost:3000", { transports : ['websocket'] });
  }

  sendMessage(msg : string, userName : string){
    if(this.socket)
      return this.socket.emit('message',{author: userName,  message: msg});
    else
      return null;
  }

  public onMessage(event : string): Observable<any>{
    return new Observable<any>(observer => {
      this.socket.on('message', (data:any) => observer)
    })
  }

  public onEvent(event: string): Observable<any> {
    return new Observable<Event>(observer => {
        this.socket.on(event,  (data: any) => observer.next(data));
    });
  }
  
}
