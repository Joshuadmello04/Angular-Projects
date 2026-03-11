import { Injectable } from '@angular/core';
import { Employee } from '../models/employee.model';

@Injectable({
  providedIn: 'root',
})
export class EmpService {
  employees: Employee[]=[]
  employee: Employee={
    "eid":0,
    "name":"",
    "age": 0
  }
  constructor(){}

  postEmployee(e:Employee)
  {
  }
}
