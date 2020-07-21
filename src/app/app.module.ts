import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatInputModule } from "@angular/material/input";
import { MatListModule } from "@angular/material/list";
import { MatToolbarModule } from "@angular/material/toolbar";


// // import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentListComponent } from "./student-list/student-list.component";



import { HttpClientModule } from '@angular/common/http';
import { StudentService } from './shared/student/student.service';
import { GiphyService } from './shared/giphy/giphy.service';
import { StudentEditComponent } from './student-edit/student-edit.component';


@NgModule({
  declarations: [
    AppComponent,
    StudentListComponent,
    StudentEditComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatListModule,
    MatToolbarModule,
  ],
  providers: [StudentService, GiphyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
