import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Welcome } from './welcome/welcome';
import { Dashboard } from './dashboard/dashboard';
import { StudentList } from './student-list/student-list';
import { StudentForm } from './student-form/student-form';
import { StudentDetails } from './student-details/student-details';
import { StudentResult } from './student-result/student-result';
import { StudentStrength } from './student-strength/student-strength';
import { StudentEdit } from './student-edit/student-edit';
import { StudentBySchool } from './student-by-school/student-by-school';
import { authGuard } from './auth-guard';
import { Login } from './login/login';

const routes: Routes = [
  {
    path: '',
    component: Dashboard,
  },
  {
    path:'login',
    component:Login
  },
  {
    path: 'students',
    component: StudentList
  },
  {
    path: 'add',
    component: StudentForm,
    canActivate:[authGuard]
  },
  {
    path: 'edit/:reg',
    component: StudentEdit,   // ✅ keep this one
    canActivate:[authGuard]
  },
  {
    path: 'details/:reg',
    component: StudentDetails
  },
  {
    path: 'result',
    component: StudentResult
  },
  {
    path: 'strength',
    component: StudentStrength
  },
  {
    path: 'school',
    component: StudentBySchool
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
