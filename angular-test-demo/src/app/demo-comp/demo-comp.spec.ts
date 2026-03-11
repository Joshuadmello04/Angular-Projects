import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoComp } from './demo-comp';

describe('DemoComp', () => {
  let component: DemoComp;
  let fixture: ComponentFixture<DemoComp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DemoComp],
    }).compileComponents();

    fixture = TestBed.createComponent(DemoComp);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
