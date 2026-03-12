import { Component } from '@angular/core';
import { Student } from '../models/student.model';
import { StudentService } from '../services/student-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-form',
  standalone: false,
  templateUrl: './student-form.html',
  styleUrl: './student-form.css',
})
export class StudentForm {
  student:Student=new Student();
  constructor(private ss : StudentService,
    private router:Router
  ){}

  addStudent(){
    this.ss.addStudent(this.student).subscribe(()=>{
      alert("Student added!");
      this.router.navigate(['/students']);
    })
  }
}
