import { Component } from '@angular/core';

@Component({
  selector: 'app-two-way-binding',
  standalone: false,
  templateUrl: './two-way-binding.html',
  styleUrl: './two-way-binding.css',
})
export class TwoWayBinding {
  user: string="Manoj"

  display(){
    console.log("username : "+this.user)
  }

  changeUser(){
    this.user="deepika"
  }
}
