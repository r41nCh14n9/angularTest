import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { Student } from '../student';
import { StudentService } from '../shared/student/student.service';
import { StudentInfoComponent } from '../student-info/student-info.component';
import { Router } from '@angular/router';


@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{//implements OnInit
  // loginForm = new FormGroup({
    sacc = new FormControl(null,[Validators.required, Validators.maxLength(30)]);
    spwd = new FormControl(null,[Validators.required, Validators.maxLength(30)]);

  // });

  err = new Map<string, string>();
  student: Student;
  result: Student;

  constructor(
    private studentService:StudentService,
    private router: Router,
    ) { 
    this.student = new Student;
  }
// ngOnInit(): void {}


getErrorMessage() {
  let result1: string = '';
  let result2: string = '';
  
  //validate sacc
  if (this.sacc.hasError('required')) {
    result1 = 'You must enter a value';
  }else if(this.sacc.hasError('maxlength')){
    result1 = 'Not a valid sacc';
  }
  this.err.set("sacc",result1);

  //validate spwd
  if (this.spwd.hasError('required')) {
    result2 = 'You must enter a value';
  }else if(this.spwd.hasError('maxlength')){
    result2 = 'Not a valid spwd';
  }
  this.err.set("spwd",result2);
}

onSubmit(){
  this.studentService.login(this.student).subscribe(data => {
    this.result = data;
    if(data != null){
      window.sessionStorage.setItem('student', JSON.stringify(data));
      this.gotoInfo();
    }else{
      alert("no account found.");
    }
    
  }, error => console.error(error));
  
  // alert("session: "+typeof(window.sessionStorage.getItem('student')) );
 
  
}

gotoInfo(){
  this.router.navigate(['/student-info']);
}
  
}
