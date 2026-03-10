import { Component } from '@angular/core';
import { ChatService } from '../services/chat-service';

@Component({
  selector: 'app-ram',
  standalone: false,
  templateUrl: './ram.html',
  styleUrl: './ram.css',
})
export class Ram {
  constructor(public cs:ChatService){
  }
  sendMessage(msg:string)
  {
      //send to service
      this.cs.chatMessage("Ram : "+msg)
  }
}
