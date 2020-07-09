import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IslamicReportComponent } from './islamic-report.component';

describe('IslamicReportComponent', () => {
  let component: IslamicReportComponent;
  let fixture: ComponentFixture<IslamicReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IslamicReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IslamicReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
