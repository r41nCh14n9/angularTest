import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ForgetPwdComponent } from './forget-pwd.component';

describe('ForgetPwdComponent', () => {
  let component: ForgetPwdComponent;
  let fixture: ComponentFixture<ForgetPwdComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ForgetPwdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForgetPwdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
