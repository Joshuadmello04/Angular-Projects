import { Component } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  standalone: false,
  templateUrl: './event-binding.html',
  styleUrl: './event-binding.css',
})
export class EventBinding {
  
  name : string="";
  length : number=0;
  fullName(fname: string,lname : string): void{
    this.name = fname+" "+lname;
  }

  justFindLength(str: string){
    this.length= str.length
  }
}
