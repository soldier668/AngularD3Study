import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CascadingFigureComponent } from './cascading-figure.component';

describe('CascadingFigureComponent', () => {
  let component: CascadingFigureComponent;
  let fixture: ComponentFixture<CascadingFigureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CascadingFigureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CascadingFigureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
