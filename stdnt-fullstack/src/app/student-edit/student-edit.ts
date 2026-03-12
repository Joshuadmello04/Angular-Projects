import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Student } from '../models/student.model';
import { StudentService } from '../services/student-service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-student-edit',
  standalone:false,
  templateUrl: './student-edit.html',
  styleUrls: ['./student-edit.css']
})
export class StudentEdit implements OnInit {

  student: Student = new Student();
  reg!: number;

  constructor(
    private ss: StudentService,
    private route: ActivatedRoute,
    private router: Router,
    private cd: ChangeDetectorRef
  ) {}

  ngOnInit() {

    // get reg from URL
    this.reg = Number(this.route.snapshot.params['reg']);

    // fetch student from backend
    this.ss.getStudent(this.reg).subscribe(data => {
      console.log("Student loaded:", data);
      this.student = data;
      this.cd.detectChanges();   // needed because of your change detection issue
    });
  }

  update(){
    this.ss.updateStudent(this.reg, this.student).subscribe(()=>{
      alert("Student updated");
      this.router.navigate(['/students']);
    });
  }

}