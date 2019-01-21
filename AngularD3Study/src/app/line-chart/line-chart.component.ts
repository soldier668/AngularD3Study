import {Component, OnInit, ViewChild} from '@angular/core';
import { LineChart } from './LineChart';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnInit {

  chart: LineChart;
  @ViewChild('target') target; // 获得子组件的引用
  constructor() { }

  ngOnInit() {
    this.chart = new LineChart(this.target.nativeElement);
    this.chart.render();
  }

}




