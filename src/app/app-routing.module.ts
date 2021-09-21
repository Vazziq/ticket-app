import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BadgeComponent } from './badge/badge.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  // { path: '**', redirectTo: 'login' },
  { path: 'login', component: LoginComponent },
  { path: 'login/navbar/home', component: HomeComponent },
  { path: 'login/navbar', component: NavbarComponent },
  { path: 'login/navbar/badge', component: BadgeComponent },
  { path: 'login/navbar/home', component: BadgeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
