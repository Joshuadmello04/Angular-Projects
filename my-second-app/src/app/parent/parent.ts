import { Component } from '@angular/core';
import { Child } from './child/child';
import { Child2 } from './child2/child2';

@Component({
  selector: 'app-parent',
  imports: [Child,Child2],
  templateUrl: './parent.html',
  styleUrl: './parent.css',
})
export class Parent {}
