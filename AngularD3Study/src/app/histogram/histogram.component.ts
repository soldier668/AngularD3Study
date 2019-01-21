import {Component, OnInit, ViewContainerRef} from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-histogram',
  templateUrl: './histogram.component.html',
  styleUrls: ['./histogram.component.css']
})
export class HistogramComponent implements OnInit {
  width = 800;  //画布的宽度
  height = 800;  //画布的高度
  dataset:number[] = [1.2, 2.3, 0.9, 1.5, 3.3];
    // [250, 230, 170, 130, 90];

  constructor(private viewContainerRef: ViewContainerRef) {
  }

  ngOnInit() {
    // let elem = this.viewContainerRef.element.nativeElement;
    this.draw();
  }

  draw(): void {
    let widthLinear = d3.scaleLinear()
      .domain([0, d3.max(this.dataset)])
      .range([0,250]);  //定义比例尺

    //测试
    // let x = widthLinear(1.2);

    let rectHeight = 25;
    let svg = d3.select("#div1")
      .append('svg')
      .attr('width', this.width)
      .attr('height', this.height);

    svg.selectAll("rect")
      .data(this.dataset)
      .enter()
      .append("rect")
      .attr("x",20)
      .attr("y",function(d,i){
        return (i * rectHeight);
      })
      .attr("width",function(d){
        return widthLinear(d);
      })
      .attr("height", rectHeight-2)
      .attr("fill","steelblue");
  }

}
