import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../services/user';
import { Role } from '../services/role';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  
  constructor(private router: Router,
    private us:User,
    private rs:Role)
  {
  }
  
  abc(event: any){
    event.preventDefault(); // to prevent default behaviour
    let uname:string = event.target.elements[0].value;
    console.log("Username "+uname)
    let pwd:string = event.target.elements[1].value;
    console.log("Password : "+pwd);
    let role:string = event.target.elements[2].value;
    console.log("Role : "+role)
    console.log("------------------------")

    if(uname==pwd)
    {
       //we need to inject the router Object
        this.us.setName(uname);
        this.rs.setRole(event.target.elements[2].value);
        this.router.navigate(['welcome']);
    }
    else{
      this.router.navigate(['failure'])
    }
  }
}
