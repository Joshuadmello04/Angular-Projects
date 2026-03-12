import { Component, ChangeDetectorRef } from '@angular/core';
import { Student } from '../models/student.model';
import { StudentService } from '../services/student-service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-student-details',
  standalone: false,
  templateUrl: './student-details.html',
  styleUrls: ['./student-details.css'],
})
export class StudentDetails {

  student!: Student;

  constructor(
    private route: ActivatedRoute,
    private ss: StudentService,
    private cd: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      const reg = Number(params['reg']);

      this.ss.getStudent(reg).subscribe(data => {
        console.log("Student received:", data);
        this.student = data;
        this.cd.detectChanges();   // 👈 force UI refresh
      });
    });
  }
}