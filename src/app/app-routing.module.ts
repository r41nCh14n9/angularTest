import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentEditComponent } from './student-edit/student-edit.component';
import { StudentListComponent } from './student-list/student-list.component';



const routes: Routes = [
  { path: '', redirectTo: '/student-list', pathMatch: 'full'},
  { 
    path: 'student-list',
    component: StudentListComponent
  },
  {
    path: 'student-add',
    component: StudentEditComponent
  },
  {
    path: 'student-edit/:id',
    component: StudentEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [
  StudentListComponent,
  StudentEditComponent
];


