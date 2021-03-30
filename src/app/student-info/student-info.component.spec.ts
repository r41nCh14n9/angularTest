import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { StudentInfoComponent } from './student-info.component';

describe('StudentInfoComponent', () => {
  let component: StudentInfoComponent;
  let fixture: ComponentFixture<StudentInfoComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
