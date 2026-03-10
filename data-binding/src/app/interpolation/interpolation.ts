import { Component } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  standalone: false,
  templateUrl: './interpolation.html',
  styleUrl: './interpolation.css',
})
export class Interpolation {
  name : String = "Joshua"
  salary : number=929292

  getAnnualPackage(){
    return this.salary*12;
  }
}
