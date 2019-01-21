import {Component, OnInit} from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit {
  // width = 400;
  // height = 400;
  //
  // dataSet = [30, 10, 43, 53, 55, 13];  //设置数据集

  constructor() {
  }

  ngOnInit() {
    this.draw();
  }

  private draw() {
    let marge = {top: 20, bottom: 60, left: 20, right: 60};
    let svg = d3.select('svg');
    let width = svg.attr('width');
    let height = svg.attr('height');
    let g = svg.append('g')
      .attr('transform', 'translate(' + marge.top + ',' + marge.left + ')');

    let dataset = [30, 10, 43, 55, 13];

    //设置一个color的颜色比例尺，为了让不同的扇形呈现不同的颜色
    let colorScale = d3.scaleOrdinal()
      .domain(d3.range(dataset.length))
      .range(d3.schemeCategory10);

    //新建一个饼状图
    let pie = d3.pie();

    //新建一个弧形生成器
    let innerRadius = 0;//内半径
    let outerRadius = 100;//外半径
    let arc_generator = d3.arc()
      .innerRadius(0)
      .outerRadius(100);

    //将原始数据变成可以绘制饼状图的数据，
    let pieData = pie(dataset);

    //在浏览器的控制台打印pieData
    console.log(pieData);

    //在有了绘制饼状图必须的数据后，我们就可以开始绘制了
    let gs = g.selectAll('.g')
      .data(pieData)
      .enter()
      .append('g')
      .attr('transform', 'translate(' + width / 2 + ',' + height / 2 + ')');//位置信息

    //绘制饼状图的各个扇形
    gs.append('path')
      .attr('d', function (d) {
        return arc_generator(d);//往弧形生成器中出入数据
      })
      .attr('fill', function (d, i) {
        return colorScale(i);
      });

    //绘制饼状图上面的文字信息
    gs.append('text')
      .attr('transform', function (d) {//位置设在中心处
        return 'translate(' + arc_generator.centroid(d) + ')';
      })
      .attr('text-anchor', 'middle')
      .text(function (d) {
        return d.data;
      });
  }

  // draw(): void {
  //   //添加一个svg标签，并设置高宽
  //   let svg1 = d3.select('#pie')
  //     .append('svg')
  //     .attr('width', this.width)
  //     .attr('height', this.height);
  //
  //   let pie = d3.layout.pie();
  //   let pieData = pie(this.dataSet); //设置数据
  //
  //   let outRadius = 150;  //设置外半径
  //   let innerRadius = 0;  //设置内半径
  //
  //   let arc = d3.svg.arc()  //弧生成器
  //     .innerRadius(innerRadius)
  //     .outRadius(outRadius);
  //
  //   let color = d3.scale.category10();
  //   let arcs = svg1.selectAll('g')
  //     .data(pieData)
  //     .enter()
  //     .append('g')
  //     .attr('transform', 'translate(' + (this.width / 2) + ',' + (this.width / 2) + ')');
  //
  //   arcs.append('path')
  //     .attr('fill', function (d, i) {
  //       return color(i);
  //     })
  //     .attr('d', function (d) {
  //       return arc(d);
  //     });
  //
  //   arcs.append("text")
  //     .attr("transform", function (d) {
  //       return "translate("+arc.centroid(d)+")";
  //     })
  //     .attr("text-anchor","middle")
  //     .text(function (d) {
  //       return d.data;
  //     });
  // }

}
