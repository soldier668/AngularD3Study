import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {AppRoutingModule} from './app-routing.module';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { HistogramComponent } from './histogram/histogram.component';
import { CascadingFigureComponent } from './cascading-figure/cascading-figure.component';
import { LineChartComponent } from './line-chart/line-chart.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { D3SimpleBarChartComponent } from './d3-simple-bar-chart/d3-simple-bar-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    PieChartComponent,
    HistogramComponent,
    CascadingFigureComponent,
    LineChartComponent,
    PageNotFoundComponent,
    D3SimpleBarChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
