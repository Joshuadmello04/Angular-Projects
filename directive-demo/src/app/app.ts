import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('directive-demo');
  switch : boolean=false;
  ch:number=1; //ch can differ based on time of the day and all

  show():void{
    this.switch = !this.switch;
  }
}
