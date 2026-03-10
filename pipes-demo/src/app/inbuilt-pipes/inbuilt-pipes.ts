import { Component } from '@angular/core';

@Component({
  selector: 'inbuilt-pipes',
  standalone: false,
  templateUrl: './inbuilt-pipes.html',
  styleUrl: './inbuilt-pipes.css',
})
export class InbuiltPipes {
  d1: Date=new Date()
  amount: number = 23832912
  str:string="Joshua"
  emp ={ 
    "name":"Badal",
    "age":22
  }
}
