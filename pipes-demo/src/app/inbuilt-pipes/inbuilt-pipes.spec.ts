import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InbuiltPipes } from './inbuilt-pipes';

describe('InbuiltPipes', () => {
  let component: InbuiltPipes;
  let fixture: ComponentFixture<InbuiltPipes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InbuiltPipes],
    }).compileComponents();

    fixture = TestBed.createComponent(InbuiltPipes);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
