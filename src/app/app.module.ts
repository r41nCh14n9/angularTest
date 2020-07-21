import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatInputModule } from "@angular/material/input";
import { MatListModule } from "@angular/material/list";
import { MatToolbarModule } from "@angular/material/toolbar";


import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';


import { HttpClientModule } from '@angular/common/http';
import { StudentService } from './shared/student/student.service';
import { GiphyService } from './shared/giphy/giphy.service';


import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router'
import { StudentListComponent } from './student-list/student-list.component';



// const appRoutes : Routes[
//   { path: '', redirectTo: '/student-list', pathMatch: 'full'},
//   { 
//     path: 'student-list',
//     component: StudentListComponent
//   },
//   {
//     path: 'student-add',
//     component: StudentEditComponent
//   },
//   {
//     path: 'student-edit/:id',
//     component: StudentEditComponent
//   }
// ];


@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
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
    FormsModule,
    AppRoutingModule
  ],
  providers: [StudentService, GiphyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
