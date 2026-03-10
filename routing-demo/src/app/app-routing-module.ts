import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from './home/home';
import { Login } from './login/login';
import { Welcome } from './welcome/welcome';
import { Failure } from './failure/failure';
import { welcomeGuard } from './guards/welcome-guard';

const routes: Routes = [
  {
    //for default page 
    path: '',
    redirectTo: 'welcome',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: Home
  },
  {
    path: 'login',
    component: Login
  },
  {
    path: 'welcome',
    component: Welcome,
    canActivate: [welcomeGuard],
    data:['Manager','Employee']
  },
  {
    path: 'failure',
    //redirectTo: 'login',
    component: Failure
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
