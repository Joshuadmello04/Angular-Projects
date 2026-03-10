import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Interpolation } from './interpolation/interpolation';
import { PropertyBinding } from './property-binding/property-binding';
import { EventBinding } from './event-binding/event-binding';
import { TwoWayBinding } from './two-way-binding/two-way-binding';
import { FormsModule } from '@angular/forms';
import { Greetings } from './greetings/greetings';

@NgModule({
  declarations: [App, Interpolation, PropertyBinding, EventBinding, TwoWayBinding, Greetings],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {}
