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

const routes: Routes = [
  {
    path: '',
    component: Dashboard
  },
  {
    path: 'students',
    component: StudentList
  },
  {
    path: 'add',
    component: StudentForm
  },
  {
    path: 'edit/:reg',
    component: StudentEdit   // ✅ keep this one
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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
