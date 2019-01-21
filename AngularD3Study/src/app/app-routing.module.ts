import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LineChartComponent} from './line-chart/line-chart.component';
import {PieChartComponent} from './pie-chart/pie-chart.component';
import {HistogramComponent} from './histogram/histogram.component';
import {CascadingFigureComponent} from './cascading-figure/cascading-figure.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';

const routes: Routes = [
  {path: 'lineChart', component: LineChartComponent},
  {path: 'pieChart', component: PieChartComponent},
  {path: 'histogram', component: HistogramComponent},
  {path: 'cascadingFigure', component: CascadingFigureComponent},
  {path: '', redirectTo: '/lineChart', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule {
}
