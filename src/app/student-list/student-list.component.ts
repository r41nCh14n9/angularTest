import { Component, OnInit } from '@angular/core';
import { StudentService } from '../shared/student/student.service';
import { GiphyService } from '../shared/giphy/giphy.service';
import { Student } from '../student';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit{
  students: Student[];
  displayedColumns: string[] = ['sid','sname','sbday','ssex','smail','sacc'];//,'spwd'
  dataSource: Student[];
  // studentAvatar: URL[];
  //Array<any>;

  constructor(private studentService: StudentService, private giphyService: GiphyService) { }

  ngOnInit() {
    this.studentService.getAll().subscribe(data => {
      this.students = data;
      // for (const student of this.students){
      //   this.giphyService.get(student.sname).subscribe(url => student.giphyUrl = url);
      // }
    });
    this.dataSource = this.students;
  }

}
