import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentEditComponent } from './student-edit/student-edit.component';
import { StudentListComponent } from './student-list/student-list.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { StudentInfoComponent } from './student-info/student-info.component';
import { MustLoginComponent } from './must-login/must-login.component';
import { ForgetPwdComponent } from './forget-pwd/forget-pwd.component';



const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full'},
  { 
    path: 'student-list',
    component: StudentListComponent
  },
  {
    path: 'student-add',
    component: StudentEditComponent
  },
  {
    path: 'student-edit',
    component: StudentEditComponent
  },
  {
    path: 'student-info',
    component: StudentInfoComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'must-login',
    component: MustLoginComponent
  },
  {
    path: 'forget-pwd',
    component: ForgetPwdComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [
  StudentListComponent,
  StudentInfoComponent,
  StudentEditComponent,
  LoginComponent,
  RegisterComponent
];


