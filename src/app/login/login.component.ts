import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';
import { Student } from '../student';
import { StudentService } from '../shared/student/student.service';
import { Router } from '@angular/router';


@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{//implements OnInit
  loginForm = new FormGroup({
    sacc : new FormControl(null,[Validators.required, Validators.maxLength(30)]),
    spwd : new FormControl(null,[Validators.required, Validators.maxLength(30)]),
  });
    // sacc = new FormControl(null,[Validators.required, Validators.maxLength(30)]);
    // spwd = new FormControl(null,[Validators.required, Validators.maxLength(30)]);

  

  
  student: Student;
  result: Student;

  constructor(
    private studentService:StudentService,
    private router: Router,
    private fb: FormBuilder
    ) { 
    this.student = new Student;
  }
// ngOnInit(): void {}


getErrorMessageMap(): Map<string, string>{
  let err = new Map<string, string>();
  
  //validate sacc
  if (this.loginForm.get('sacc').hasError('required')) {
    err.set("sacc",'You must enter a value');
  }else if(this.loginForm.get('sacc').hasError('maxlength')){
    err.set("sacc",'Not a valid sacc');
  }

  //validate spwd
  if (this.loginForm.get('spwd').hasError('required')) {
    err.set("spwd",'You must enter a value');
  }else if(this.loginForm.get('spwd').hasError('maxlength')){
    err.set("spwd",'Not a valid spwd');
  }

  return err;
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

goResetPwd(){
  this.router.navigate(['forget-pwd']);
}
  
}
