import { Component, OnInit } from '@angular/core';
import { StudentService } from '../shared/student/student.service';
import { GiphyService } from '../shared/giphy/giphy.service';
import { Student } from '../student';
import { IfStmt } from '@angular/compiler';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit{
  logined: boolean = false;
  students: Student[];
  displayedColumns: string[] = ['sid','sname','sbday','ssex','smail','sacc'];//,'spwd'
  dataSource: Student[];
  // studentAvatar: URL[];
  //Array<any>;

  constructor(
    private studentService: StudentService, 
    private giphyService: GiphyService,
    private router: Router,
    ) { }

  ngOnInit() {
    if(window.sessionStorage.getItem('student')){
      this.studentService.getAll().subscribe(data => {
        this.students = data;
      });
      this.dataSource = this.students;
    }else{
      this.mustLogin();
    }
    
  }

  mustLogin(){
    this.router.navigate(['/must-login']);
  }
}
