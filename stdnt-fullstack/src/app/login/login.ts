import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth-service';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
   username="";
  password="";
  error="";

  constructor(private router:Router,
              private auth:AuthService){}

  login(){

    if(this.username===this.password){

      this.auth.login();   // mark logged in
      this.router.navigate(['/']);

    }
    else{
      this.error="Invalid login";
    }
  }
}
