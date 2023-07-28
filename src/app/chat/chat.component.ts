import { Component, OnInit } from '@angular/core';
import { ChatService } from '../chat.service';
import { Register } from '../registration/register.component';
@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
  providers:[ChatService]
})
export class ChatComponent implements OnInit {

  lstMsg = new Array<Message>();
  private user = new Register();
  obj1 = new Message();
  obj2 = new Message();
  message = "";
  constructor(private _chatService:ChatService) { }

  ngOnInit(): void {
    //this.user = JSON.parse(localStorage.getItem('user'));
    console.log(localStorage.getItem('user'));

    this._chatService.onEvent("PMMessage")
      .subscribe((res) => {
        console.log('connected xyz');
        console.log(res.message.message);

        this.obj1 = new Message(0, res.message.message);
        this.lstMsg.push(this.obj1);
        console.log(this.lstMsg);
      });
  }
  sendMessage(){
    this.obj2 = new Message(1, this.message);
    this.lstMsg.push(this.obj2);
    this._chatService.sendMessage(this.message, this.user.name);
  }

  receiveMessage(){
    
  }
}

class Message{
  type : number;
  message : string;

  constructor(n? : number, msg? : string){
    this.message = msg;
    this.type = n;
  }
}