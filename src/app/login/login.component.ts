import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Student } from '../student';
import { StudentService } from '../shared/student/student.service';
import { StudentInfoComponent } from '../student-info/student-info.component';


@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{//implements OnInit

  err = new Map<string, string>();
  student: Student;
  
  sacc = new FormControl('',[Validators.required, Validators.maxLength(30)]);
  spwd  = new FormControl('',[Validators.required, Validators.maxLength(30)]);
  email = new FormControl('',[Validators.required, Validators.email]);


  
  result;

  constructor(private studentService:StudentService) { 
    this.student = new Student;
  }
// ngOnInit(): void {}


getErrorMessage() {
  let result1: string = '';
  let result2: string = '';
  let result3: string = '';
  //validate smail
  if (this.email.hasError('required')) {
    result1 = 'You must enter a value';
  }else if(this.email.hasError('mail')){
    result1 = 'Not a valid email';
  }
  this.err.set("mail",result1);

  //validate sacc
  if (this.sacc.hasError('required')) {
    result2 = 'You must enter a value';
  }else if(this.sacc.hasError('maxlength')){
    result2 = 'Not a valid sacc';
  }
  this.err.set("sacc",result2);

  //validate spwd
  if (this.spwd.hasError('required')) {
    result3 = 'You must enter a value';
  }else if(this.spwd.hasError('maxlength')){
    result3 = 'Not a valid spwd';
  }
  this.err.set("spwd",result3);
}

ngSubmit(){
  this.studentService.login(this.student).subscribe(data => {
    this.result = data;
  }); //, error => console.error(error)
}

  
}
