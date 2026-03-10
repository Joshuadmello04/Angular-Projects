import { Component, Input } from '@angular/core';

@Component({
  selector: 'greet',
  standalone: false,
  templateUrl: './greetings.html',
  styleUrl: './greetings.css',
})
export class Greetings {
  @Input("name")
  day: string="Morning"
  @Input("name")
  user: string="Guest"
}
