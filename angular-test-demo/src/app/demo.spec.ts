import { ComponentFixture, TestBed } from '@angular/core/testing';
import { vi } from 'vitest';

import { Demo } from './demo';
import { DemoComp } from './demo-comp/demo-comp';

describe('Demo', () => {

  let service: Demo;
  let fixture: ComponentFixture<DemoComp>
  let component: DemoComp

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[DemoComp]
    });

    service = TestBed.inject(Demo);
    fixture = TestBed.createComponent(DemoComp)
    component = fixture.componentInstance
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have invoked',()=>{

    const spy = vi.spyOn(service,'doSomeTask')

    component.method();

    expect(spy).toHaveBeenCalled();

  })

});