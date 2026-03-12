import { Component, ChangeDetectorRef } from '@angular/core';
import { StudentService } from '../services/student-service';

@Component({
  selector: 'app-student-strength',
  standalone: false,
  templateUrl: './student-strength.html',
  styleUrls: ['./student-strength.css'],
})
export class StudentStrength {

  gender = "";
  std = 0;
  count?: number;

  constructor(private ss: StudentService,
              private cd: ChangeDetectorRef) {}

  check() {
    this.ss.getStrength(this.gender, this.std).subscribe(data => {
      console.log("Strength:", data);
      this.count = data;
      this.cd.detectChanges();   // 🔥 force Angular to refresh
    });
  }
}