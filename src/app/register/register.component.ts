import { Component, OnInit } from '@angular/core';
import { Student } from '../student';
import { StudentService } from '../shared/student/student.service';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  sexLabelControl = new FormControl('');


  student: Student;
  fieldColumns: string[] = ['sacc','spwd','sname','sbday','ssex','smail'];
  testResult;



  constructor(
    private studentService:StudentService,
    private router: Router,
    ) { 
    this.student = new Student;
  }

  ngOnInit(): void {
  }

  onSubmit(){
    this.studentService.register(this.student).subscribe(data => {
      this.testResult = data;
    }, error => console.error(error));
  }

  gotoInfo(){
    this.router.navigate(['/student-info']);
  }
}
