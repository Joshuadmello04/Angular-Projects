import { Component } from '@angular/core';
import { Demo } from '../demo';

@Component({
  selector: 'app-demo-comp',
  imports: [],
  templateUrl: './demo-comp.html',
  styleUrl: './demo-comp.css',
})
export class DemoComp {
  constructor(private ds:Demo){}

  ngOnInit():void{
    this.ds.doSomeTask();
  }

  method(){
    this.ds.doSomeTask();
  }
}
