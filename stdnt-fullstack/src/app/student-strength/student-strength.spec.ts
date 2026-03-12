import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentStrength } from './student-strength';

describe('StudentStrength', () => {
  let component: StudentStrength;
  let fixture: ComponentFixture<StudentStrength>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StudentStrength],
    }).compileComponents();

    fixture = TestBed.createComponent(StudentStrength);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
