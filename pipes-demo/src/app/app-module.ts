import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { InbuiltPipes } from './inbuilt-pipes/inbuilt-pipes';
import { CustomPipes } from './custom-pipes/custom-pipes';
import { SquarePipe } from './pipes/square-pipe';
import { CubePipe } from './pipes/cube-pipe';
import { PowerPipe } from './pipes/power-pipe';

@NgModule({
  declarations: [App, InbuiltPipes, CustomPipes, SquarePipe, CubePipe, PowerPipe],
  imports: [BrowserModule, AppRoutingModule],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {}
