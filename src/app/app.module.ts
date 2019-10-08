import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DoughnutChartComponent } from 'angular-d3-charts';

@NgModule({
  declarations: [
    AppComponent,
    DoughnutChartComponent  
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
