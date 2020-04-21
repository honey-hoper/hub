import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { MainComponent } from './main/main.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { CategoryCardComponent } from './home/category-card/category-card.component';
import { JobCardComponent } from './home/job-card/job-card.component';
import { StartupCardComponent } from './home/startup-card/startup-card.component';

@NgModule({
  declarations: [
  MainComponent,
  HeaderComponent,
  HomeComponent,
  CategoryCardComponent,
  JobCardComponent,
  StartupCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [ MainComponent ]
})
export class AppModule { }
