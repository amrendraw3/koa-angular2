import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WebsiteComponent } from '../app/website/website.component';
import { LoginComponent } from '../app/login/login.component';
import { DashboardComponent } from '../app/dashboard/dashboard.component';
import { PagesComponent } from '../app/dashboard/pages/pages.component';
import { HeaderComponent } from '../app/dashboard/header/header.component';
import { FooterComponent } from '../app/dashboard/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    WebsiteComponent,
    LoginComponent,
    DashboardComponent,
    PagesComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
