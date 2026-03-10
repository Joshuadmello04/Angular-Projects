import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ram } from './ram';

describe('Ram', () => {
  let component: Ram;
  let fixture: ComponentFixture<Ram>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Ram],
    }).compileComponents();

    fixture = TestBed.createComponent(Ram);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
