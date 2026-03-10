import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LogService {

  constructor(){
    console.log("Log service object created")
  }

  logMessage(msg:string)
  {
    console.log("logged  : "+msg);
  }
}
