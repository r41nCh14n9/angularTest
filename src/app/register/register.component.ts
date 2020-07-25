import { Component, OnInit } from '@angular/core';
import { Student } from '../student';
import { StudentService } from '../shared/student/student.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  registerForm = new FormGroup({
    sacc: new FormControl('', [Validators.required, Validators.maxLength(30)]),
    spwd: new FormControl('', [Validators.required, Validators.maxLength(30)]),
    sname: new FormControl('', [Validators.required, Validators.maxLength(30)]),
    sbday: new FormControl('', [Validators.required, Validators.maxLength(30)]),
    ssex: new FormControl('', [Validators.required]),
    smail: new FormControl('', [Validators.required, Validators.maxLength(30), this.validateEmail]),
  });


  student: Student;
  fieldColumns: string[] = ['sacc', 'spwd', 'sname', 'sbday', 'ssex', 'smail'];




  constructor(
    private studentService: StudentService,
    private router: Router,
  ) {
    this.student = new Student;
  }

  ngOnInit(): void {
  }

  onSubmit() {
    let result;
    this.studentService.register(this.student).subscribe(data => {
      result = data;
      this.gotoInfo();
    }, error => console.error(error));
  }

  gotoInfo() {
    this.router.navigate(['/student-info']);
  }

  getErrorMessageMap(): Map<string, string> {
    let err = new Map<string, string>();
    //validate sacc
    if (this.registerForm.get('sacc').hasError('required')) {
      err.set("sacc", 'You must enter a value');
    } else if (this.registerForm.get('sacc').hasError('maxlength')) {
      err.set("sacc", 'AccountName is too long');
    } else if (this.registerForm.get('sacc').hasError('checkAcc')){
      err.set("sacc", 'Account is already exist');
    }

    //validate spwd
    if (this.registerForm.get('spwd').hasError('required')) {
      err.set("spwd", 'You must enter a value');
    } else if (this.registerForm.get('spwd').hasError('maxlength')) {
      err.set("spwd", 'Not a valid spwd');
    }

    //validate sname
    if (this.registerForm.get('sname').hasError('required')) {
      err.set("sname", 'You must enter a value');
    } else if (this.registerForm.get('sname').hasError('maxlength')) {
      err.set("sname", 'Not a valid spwd');
    }

    //validate sbday
    if (this.registerForm.get('sbday').hasError('required')) {
      err.set("sbday", 'You must enter a value');
    } else if (this.registerForm.get('sbday').hasError('maxlength')) {
      err.set("sbday", 'Not a valid sbday');
    }

    //validate ssex
    if (this.registerForm.get('ssex').hasError('required')) {
      err.set("ssex", 'You must choose a sex type');
    }

    //validate smail
    if (this.registerForm.get('smail').hasError('required')) {
      err.set("smail", 'You must enter a value');
    } else if (this.registerForm.get('smail').hasError('maxlength')) {
      err.set("smail", 'Email is too long');
    } else if (this.registerForm.get('smail').hasError('validateEmail')) {
      err.set("smail", 'Not a valid email');
    }

    return err;
  }

  checkAcc() {
    this.studentService.checkAcc(this.student.sacc).subscribe(data => {
      if(data){
        this.registerForm.controls['sacc'].setErrors({'checkAcc': true});
      }else{
        delete this.registerForm.controls['sacc'].errors['checkAcc'];
      }
      // alert(JSON.stringify(this.registerForm.controls['sacc'].errors));
    });
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
