import { Component, ChangeDetectorRef } from '@angular/core';
import { Student } from '../models/student.model';
import { StudentService } from '../services/student-service';

@Component({
  selector: 'app-student-result',
  standalone: false,
  templateUrl: './student-result.html',
  styleUrls: ['./student-result.css'],
})
export class StudentResult {

  students: Student[] = [];

  constructor(private ss: StudentService,
              private cd: ChangeDetectorRef) {}

  getResult(pass:boolean)
  {
    this.ss.getResults(pass).subscribe(data=>{
      console.log("Result students:", data);
      this.students = data;
      this.cd.detectChanges(); // refresh UI
    });
  }
}