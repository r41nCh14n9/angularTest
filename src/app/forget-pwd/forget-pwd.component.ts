import { Component, OnInit } from '@angular/core';
import { Student } from '../student';
import { Observable } from 'rxjs';
import { StudentService } from '../shared/student/student.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators, EmailValidator } from '@angular/forms';

@Component({
  selector: 'forget-pwd',
  templateUrl: './forget-pwd.component.html',
  styleUrls: ['./forget-pwd.component.css']
})
export class ForgetPwdComponent implements OnInit {
  
  student: Student;
  
  
  resetForm = new FormGroup({
    sacc : new FormControl(null,[Validators.required, Validators.maxLength(30)]),
    smail : new FormControl(null,[Validators.required, Validators.maxLength(30),this.validateEmail]),//Validators.email
  });

  constructor(
    private studentService: StudentService,
    private router: Router) {
    this.student = new Student;
  }

  ngOnInit(): void {
  }

  onSubmit() {
    let result: any;
    this.studentService.resetPwd(this.student).subscribe(data => {
      result = data;
      // alert(this.result);
      if (result) {
        alert("密碼重設成功，將跳轉至登入頁面，\n請至Email收取新密碼後再重新登入。");
        this.router.navigate(['login']);
        return result;
      } else {
        alert("密碼重設失敗，請確認輸入資料是否正確。");
        return result;
      }
    });
  }
  
  getErrorMessage(): Map<string,string> {
    let err = new Map<string,string>();

    //validate sacc
  if (this.resetForm.get('sacc').hasError('required')) {
    err.set("sacc",'You must enter a value');
  }else if(this.resetForm.get('sacc').hasError('maxlength')){
    err.set("sacc",'Not a valid sacc');
  }
  
  //validate smail
  if (this.resetForm.get('smail').hasError('required')) {
    err.set("smail",'You must enter a value');
  }else if(this.resetForm.get('smail').hasError('maxlength')){
    err.set("smail",'Email is too long');
  }else if(this.resetForm.get('smail').hasError('validateEmail')){
    err.set("smail",'Not a valid email');
  }
  // else if(this.resetForm.get('smail').hasError('email')){
  //   err.set("smail",'Not a valid email');
  // }


    return err;
  }

  validateEmail(c: FormControl) {
    let EMAIL_REGEXP = /^([A-Za-z0-9_\-\.])+\@(163.com|qq.com|42du.cn|yahoo.com|yahoo.com.tw|google.com)$/;
    return EMAIL_REGEXP.test(c.value) ? null : {
      validateEmail: {
        valid: false
      }
    };
  }
}
