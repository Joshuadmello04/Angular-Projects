import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Home } from './home/home';
import { Login } from './login/login';
import { Welcome } from './welcome/welcome';
import { Menu } from './menu/menu';
import { Failure } from './failure/failure';
import { User } from './services/user';
import { Role } from './services/role';

@NgModule({
  declarations: [App, Home, Login, Welcome, Menu, Failure],
  imports: [BrowserModule, AppRoutingModule],
  providers: [provideBrowserGlobalErrorListeners(),User,Role],
  bootstrap: [App],
})
export class AppModule {}
