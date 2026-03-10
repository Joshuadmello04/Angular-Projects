import { Component } from '@angular/core';
import { User } from '../services/user';

@Component({
  selector: 'app-welcome',
  standalone: false,
  templateUrl: './welcome.html',
  styleUrl: './welcome.css',
})
export class Welcome {
  constructor(public us:User){

  }
}
