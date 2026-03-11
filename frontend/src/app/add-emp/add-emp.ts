import { Component } from '@angular/core';
import { Employee } from '../models/employee.model';
import { EmpService } from '../services/emp-service';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-emp',
  standalone: false,
  templateUrl: './add-emp.html',
  styleUrl: './add-emp.css',
})
export class AddEmp {
  
  constructor(public es:EmpService,private hc:HttpClient){

  }
  onSubmit(empForm:NgForm)
  {
    this.hc.post("http://localhost:8181/employees", empForm.value).subscribe((res)=>{
        console.log(res)
        empForm.reset()

      this.es.employee = {
        eid:0,
        name:"",
        age:0
      }

    })
  }
}
