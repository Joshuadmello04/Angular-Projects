import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Parent } from './parent/parent';
import { Child1 } from './parent/child1/child1';
import { Child2 } from './parent/child2/child2';
import { Child3 } from './parent/child2/child3';
import { Child4 } from './parent/child4/child4';

@NgModule({
  declarations: [App, Parent, Child1, Child2, Child3, Child4],
  imports: [BrowserModule, AppRoutingModule],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App, Parent],
})
export class AppModule {}
