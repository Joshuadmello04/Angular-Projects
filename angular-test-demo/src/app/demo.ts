import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Demo {
  constructor(){

  }

  doSomeTask(){
    console.log("Did some task...")
  }
}
