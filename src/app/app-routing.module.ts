import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WebsiteComponent } from '../app/website/website.component';
import { LoginComponent } from '../app/login/login.component';
import { DashboardComponent } from '../app/dashboard/dashboard.component';
import { PagesComponent } from '../app/dashboard/pages/pages.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: 'website', component: WebsiteComponent },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'dashboard/pages', component: PagesComponent },
  { path: '**', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [WebsiteComponent, LoginComponent, DashboardComponent];