/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Admin2Component } from './admin2.component';

describe('Admin2Component', () => {
  let component: Admin2Component;
  let fixture: ComponentFixture<Admin2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Admin2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Admin2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
