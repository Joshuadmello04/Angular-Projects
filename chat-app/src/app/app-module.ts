import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Ram } from './ram/ram';
import { Shyam } from './shyam/shyam';
import { ChatService } from './services/chat-service';
import { LogService } from './services/log-service';

@NgModule({
  declarations: [App, Ram, Shyam],
  imports: [BrowserModule, AppRoutingModule],
  providers: [provideBrowserGlobalErrorListeners(),ChatService,LogService],
  bootstrap: [App],
})
export class AppModule {}
