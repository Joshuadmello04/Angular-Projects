import { Component, ChangeDetectorRef } from '@angular/core';
import { Student } from '../models/student.model';
import { StudentService } from '../services/student-service';

@Component({
  selector: 'app-student-by-school',
  standalone: false,
  templateUrl: './student-by-school.html',
  styleUrl: './student-by-school.css',
})
export class StudentBySchool {
  school1 = "";
  students: Student[] = [];

  school2 = "";
  countSchool!: number;

  school3 = "";
  std = 0;
  countSchoolStd!: number;

  constructor(private ss:StudentService,
              private cd:ChangeDetectorRef){}

  search(){
    this.ss.getStudentsBySchool(this.school1).subscribe(data=>{
      this.students = data;
      this.cd.detectChanges();
    });
  }

  check(){
    this.ss.getCountBySchool(this.school2).subscribe(data=>{
      this.countSchool = data;
      this.cd.detectChanges();
    });
  }

  check2(){
    this.ss.getCountBySchoolStd(this.school3,this.std).subscribe(data=>{
      this.countSchoolStd=data;
      this.cd.detectChanges();
    });
  }
}
