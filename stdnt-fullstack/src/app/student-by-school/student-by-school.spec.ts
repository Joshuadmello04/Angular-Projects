import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentBySchool } from './student-by-school';

describe('StudentBySchool', () => {
  let component: StudentBySchool;
  let fixture: ComponentFixture<StudentBySchool>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StudentBySchool],
    }).compileComponents();

    fixture = TestBed.createComponent(StudentBySchool);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
