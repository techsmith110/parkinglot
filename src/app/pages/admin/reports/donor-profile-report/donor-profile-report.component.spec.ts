import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DonorProfileReportComponent } from './donor-profile-report.component';

describe('DonorProfileReportComponent', () => {
  let component: DonorProfileReportComponent;
  let fixture: ComponentFixture<DonorProfileReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DonorProfileReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DonorProfileReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
