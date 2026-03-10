import { Component } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  standalone: false,
  templateUrl: './property-binding.html',
  styleUrl: './property-binding.css',
})
export class PropertyBinding {
  name : String = "Joshua"
  salary : number=929292
  uiType : string = "number"
  uiStuff : string="date"

  getAnnualPackage(){
    return this.salary*12;
  }
}
