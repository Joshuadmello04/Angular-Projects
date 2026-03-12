import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Welcome } from './welcome/welcome';
import { Dashboard } from './dashboard/dashboard';
import { StudentList } from './student-list/student-list';
import { StudentForm } from './student-form/student-form';
import { StudentDetails } from './student-details/student-details';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { StudentResult } from './student-result/student-result';
import { StudentStrength } from './student-strength/student-strength';
import { CommonModule } from '@angular/common';
import { StudentEdit } from './student-edit/student-edit';

@NgModule({
  declarations: [
    App,Welcome,Dashboard,
    StudentList,StudentForm,StudentDetails,
    StudentResult,StudentStrength,
    StudentEdit
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule, CommonModule],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {}
