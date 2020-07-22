import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from '../shared/student/student.service';
import { GiphyService } from '../shared/giphy/giphy.service';
import { NgForm } from '@angular/forms';
import { Student } from '../student';


@Component({
  selector: 'app-student-edit',
  templateUrl: './student-edit.component.html',
  styleUrls: ['./student-edit.component.css']
})
export class StudentEditComponent implements OnInit, OnDestroy {

  student: Student;
  studentUrl: string;
  sub: Subscription;
  studentApi = "//localhost:8080/SpringbootTest";

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private studentService: StudentService,
    private giphyService: GiphyService
  ) { }
  

  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {
      const id = params['sid'];
      if(id){
        this.studentService.get(id).subscribe((student: Student) => {
          if(student){
            this.student = student;
            this.studentUrl = this.studentApi+"/student/get/"+id;
            // student._links.self.href;
            // this.giphyService.get(student.sname).subscribe(url => student.giphyUrl = url);
          }else{
            console.log(`Student with id '${id}' not found, returning to list`);
            this.gotoList();
          }
        });
      }
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  gotoList(){
    this.router.navigate(['/student-list']);
  }

  save(form: NgForm){
    this.studentService.save(form).subscribe(result => {
      this.gotoList();
    }, error => console.error(error))
  }

  // remove(href){
  //   this.studentService.remove(href).subscribe(result => {
  //     this.gotoList();
  //   }, error => console.error(error))
  // }

}
