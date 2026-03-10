import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Parent } from './parent/parent';
import { Child } from './parent/child/child';
import { Child2 } from './parent/child2/child2';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Parent,Child,Child2],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('my-second-app');
}
