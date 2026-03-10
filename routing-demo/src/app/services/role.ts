import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Role {
  private role:string = ""

  constructor(){}

  public setRole(irole:string):void{
    this.role=irole;
  }

  public getRole():string{
    return this.role;
  }
}
