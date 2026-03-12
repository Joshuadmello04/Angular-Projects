import { Component, OnInit,ChangeDetectorRef } from '@angular/core';
import { Student } from '../models/student.model';
import { StudentService } from '../services/student-service';

@Component({
  selector: 'app-student-list',
  standalone: false,
  templateUrl: './student-list.html',
  styleUrls: ['./student-list.css'], // ✅ correct
})
export class StudentList implements OnInit {
  students:Student[]=[]
  constructor(private ss:StudentService,  private cd: ChangeDetectorRef){
  }
  ngOnInit():void{
    this.loadStudents();
  }
  
  loadStudents(){
    this.ss.getAllStudents().subscribe(data=>{
    console.log(data);
    this.students=data;
    this.cd.detectChanges();//needed to force ui refresh
   } );
  }
  
  deleteStudent(reg:number){
    this.ss.deleteStudent(reg).subscribe(()=>{
      this.loadStudents()
    });
  }
}

