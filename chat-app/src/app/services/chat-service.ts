import { Injectable } from '@angular/core';
import { LogService } from './log-service';

@Injectable()
export class ChatService {
  messages: string[] = [];
  
  constructor(private ls:LogService){ //inject the log service here
    console.log("Chat service object created")
    ls.logMessage("log service object created")
  }

  chatMessage(msg:string){
      this.messages.push(msg);
      this.ls.logMessage(msg)//if we remove this then it wont create log object ie lazy instantiation..
  }
}
