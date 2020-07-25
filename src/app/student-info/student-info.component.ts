import { Component, OnInit } from '@angular/core';
import { Student } from '../student';
import { Router } from '@angular/router';

@Component({
  selector: 'student-info',
  templateUrl: './student-info.component.html',
  styleUrls: ['./student-info.component.css']
})
export class StudentInfoComponent implements OnInit {

  logined: boolean = false;
  student: Student;

  constructor(private router: Router) { }

  ngOnInit(): void {
    if(window.sessionStorage.getItem('student')){
      this.logined = true;
      this.student = JSON.parse(window.sessionStorage.getItem('student'));
    }else{
      // alert("nothing found");
      this.mustLogin();
    }
    
  }

  back2home(){
    this.router.navigate(['/']);
  }

  logout(){
    window.sessionStorage.removeItem("student");
    alert("登出成功，將跳轉至登入頁面...");
    this.router.navigate(['/login']);
  }

  mustLogin(){
    this.router.navigate(['/must-login'],{skipLocationChange:true});
  }


}
