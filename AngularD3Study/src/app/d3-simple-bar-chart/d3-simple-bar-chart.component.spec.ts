import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { D3SimpleBarChartComponent } from './d3-simple-bar-chart.component';

describe('D3SimpleBarChartComponent', () => {
  let component: D3SimpleBarChartComponent;
  let fixture: ComponentFixture<D3SimpleBarChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ D3SimpleBarChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(D3SimpleBarChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
