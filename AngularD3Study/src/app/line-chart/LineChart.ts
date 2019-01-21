declare const d3;
export class LineChart {
  target: HTMLElement;
  data = [
    { x: 0, y: 30 },
    { x: 50, y: 20 },
    { x: 100, y: 40 },
    { x: 150, y: 80 },
    { x: 200, y: 95 }
  ];
  svgWidth = 500;
  svgHeight = 500;
  xAxisWidth = 300;
  yAxisWidth = 300;
  paddingBottom = 30;
  paddingLeft = 30;
  // x轴比例尺
  xScale = d3.scaleLinear()
    .domain([0, 100])
    .range([0, this.xAxisWidth]);
  xAixs = d3.axisBottom()
    .scale(this.xScale)
    .ticks(5);
  // y轴比例尺
  yScale = d3.scaleLinear()
    .domain([100, 0])
    .range([0, this.yAxisWidth]);
  yAixs = d3.axisLeft()
    .scale(this.yScale)
    .ticks(5);
  svg: any;
  constructor(target: HTMLElement) {
    this.target = target;
  }
  render() {
    console.log('start rendering');
    this.svg = d3.select(this.target)
      .attr('width', this.svgWidth)
      .attr('height', this.svgHeight);
    this.svg.append('g')
      .attr('transform', 'translate(' + this.paddingLeft + ',' + (this.svgHeight - this.paddingBottom) + ')')
      .call(this.xAixs);
    this.svg.append('g')
      .attr('transform', 'translate(' + this.paddingLeft + ',' +
        (this.svgHeight - this.yAxisWidth - this.paddingBottom) + ')')
      .call(this.yAixs);

    const line = d3.line()
      .x((d) => {
        return d.x + this.paddingLeft;
      })
      .y((d) => {
        return this.svgHeight - d.y - this.paddingBottom;
      })
      .curve(d3.curveCatmullRom.alpha(0.5));
    this.svg
      .append('path')
      .attr('stroke-width', 2)
      .attr('d', line(this.data))
      .attr('fill', '#5fc')
      .attr('stroke', '#333');
  }
}

