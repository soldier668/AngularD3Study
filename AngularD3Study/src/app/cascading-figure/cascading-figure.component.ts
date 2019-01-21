import {Component, OnInit} from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-cascading-figure',
  templateUrl: './cascading-figure.component.html',
  styleUrls: ['./cascading-figure.component.css']
})


export class CascadingFigureComponent implements OnInit {
   lineData:number[] = [10, 30, 25, 12, 43, 25, 18, 36];
   areaData:number[] = [10, 30, 25, 12, 43, 25, 18, 12];

  constructor() {
  }

  ngOnInit() {

  }

  changeData(which: string) {
    if (which === 'line') {
      // this.lineData.sort(d3.ascending);
      this.line();
      this.area();
    }

  }

  //折线
  line() {
    let _this = this;
    let width = 400;
    let height = 400;
    let padding = {left: 30, right: 30, top: 20, bottom: 20};

    // 初始化svg画布
    // 处理数据更新做的判断
    document.getElementById('line').innerHTML = '';
    let svg = d3.select('#line')
      .append('svg')
      .attr('width', width + 'px')
      .attr('height', height + 'px');

    let min = d3.min(this.lineData) - 5;
    let max = d3.max(this.lineData) + 5;
    // let min = 5;
    // let max = 48;
    // 比例尺
    let xScale = d3.scaleBand()
      .domain(['1月', '2月', '3月', '4月', '5月', '6月'])
      .range([0, width - padding.left - padding.right]);
    let yScale = d3.scaleLinear()
      .domain([min, max])
      .range([height - padding.top - padding.bottom, 0]);// 值域取反
    //测试
    // let x = yScale(25);

    let xAxis = d3.axisBottom()
      .scale(xScale);
    let yAxis = d3.axisLeft(yScale);

    // 添加x轴
    svg.append('g')
      .attr('class', 'axis')
      .attr('transform', 'translate(' + padding.left + ',' + (height - padding.bottom) + ')')
      .call(xAxis);
    // 添加y轴
    svg.append('g')
      .attr('class', 'axis')
      .attr('transform', 'translate(' + padding.left + ',' + padding.top + ')')
      .call(yAxis);

    // 设置折线
    let line = d3.line()
      .x(function (d, i) {
        return padding.left + (width - padding.left - padding.right) / _this.lineData.length * (i + 0.5);
      })
      .y(function (d, i) {
        return yScale(d);
      })
      .curve(d3.curveBasis);

    // 绘制折线路径
    svg.append('path')
      .attr('d', line(_this.lineData))
      .attr('stroke', 'red')
      .attr('stroke-width', '4px')
      .attr('fill', 'none')
      .attr('class', 'line'); // 添加动画
  }

  //绘制区域
  area() {
    let _this = this;
    let width = 400;
    let height = 400;
    let padding = {left: 30, right: 30, top: 20, bottom: 20};
    document.getElementById('area').innerHTML = '';
    let svg = d3.select('#area')
      .append('svg')
      .attr('width', width + 'px')
      .attr('height', height + 'px');

    let xScale = d3.scaleBand()
      .domain(['1月', '2月', '3月', '4月', '5月', '6月'])
      .range([0, width - padding.left - padding.right]);

    let yScale = d3.scaleLinear()
      .domain([d3.min(_this.areaData), d3.max(_this.areaData)]).range([height - padding.bottom - padding.top, 0]);
    let xAxis = d3.axisBottom().scale(xScale);
    let yAxis = d3.axisLeft().scale(yScale);

    svg.append('g')
      .attr('class', 'axis')
      .attr('transform', 'translate(' + padding.left + ',' + (height - padding.bottom) + ')')
      .call(xAxis);

    svg.append('g')
      .attr('class', 'axis')
      .attr('transform', 'translate(' + padding.left + ',' + padding.top + ')')
      .call(yAxis);

    // 颜色渐变
    let defs = svg.append('defs');
    let linearGradient = defs.append('linearGradient')
      .attr('id', 'linearColor').attr('x1', '0%')
      .attr('y1', '0%').attr('x2', '0%')
      .attr('y2', '0%').attr('y2', '100%');
    let a = d3.rgb(235, 0, 233);
    let b = d3.rgb(133, 0, 187);
    linearGradient.append('stop')
      .attr('offset', '0%')
      .style('stop-color', 'white')
      .transition()
      .duration(2000)
      .style('stop-color', a.toString());
    linearGradient.append('stop')
      .style('stop-color', 'white')
      .transition()
      .duration(2000)
      .attr('offset', '100%')
      .style('stop-color', b.toString());

    let area = d3.area()
      .x(function (d, i) {
        return padding.left + (width - padding.left - padding.right) / _this.lineData.length * (i + 0.5);
      })
      .y(function (d, i) {
        return height - padding.bottom;
      })
      .y1(function (d, i) {
        return yScale(d);
      })
      .curve(d3.curveBasis);
    svg.append('path').attr('d', area(_this.areaData)).style('fill', 'url(#' + linearGradient.attr('id') + ')');

  }


}
