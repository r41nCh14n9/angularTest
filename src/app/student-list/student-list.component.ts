import { Component, OnInit } from '@angular/core';
import { StudentService } from '../shared/student/student.service';
import { GiphyService } from '../shared/giphy/giphy.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit{
  students: Array<any>;

  constructor(private studentService: StudentService, private giphyService: GiphyService) { }

  ngOnInit() {
    this.studentService.getAll().subscribe(data => {
      this.students = data;
      for (const student of this.students){
        this.giphyService.get(student.name).subscribe(url => student.giphyUrl = url);
      }
    })
  }

}
