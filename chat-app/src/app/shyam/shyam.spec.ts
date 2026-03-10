import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Shyam } from './shyam';

describe('Shyam', () => {
  let component: Shyam;
  let fixture: ComponentFixture<Shyam>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Shyam],
    }).compileComponents();

    fixture = TestBed.createComponent(Shyam);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
