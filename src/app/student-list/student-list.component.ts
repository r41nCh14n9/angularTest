import { Component, OnInit, ViewChild } from '@angular/core';
import { StudentService } from '../shared/student/student.service';
import { GiphyService } from '../shared/giphy/giphy.service';
import { Student } from '../student';
import { IfStmt } from '@angular/compiler';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';
import {MatSort} from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit{
  logined: boolean = false;
  // students: Student[];
  displayedColumns: string[] = ['sid','sname','sbday','ssex','smail','sacc'];//,'spwd'
  // dataSource: Student[];
  dataSource = new MatTableDataSource<Student[]>();
  @ViewChild(MatSort,{static: true})
  sort: MatSort;
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
        this.dataSource.data = data;
        this.dataSource.sort = this.sort;
      });
      // this.dataSource = this.students;
    }else{
      this.mustLogin();
    }
    
  }

  mustLogin(){
    this.router.navigate(['/must-login'],{skipLocationChange:true});
  }
}
