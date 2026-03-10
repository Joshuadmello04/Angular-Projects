import { Component } from '@angular/core';
import { ChatService } from '../services/chat-service';

@Component({
  selector: 'app-shyam',
  standalone: false,
  templateUrl: './shyam.html',
  styleUrl: './shyam.css',
})
export class Shyam {

  constructor(public cs:ChatService){

  }

  sendMessage(msg:string)
  {
      //send to service
      this.cs.chatMessage("Shyam : "+msg)
  }
}
