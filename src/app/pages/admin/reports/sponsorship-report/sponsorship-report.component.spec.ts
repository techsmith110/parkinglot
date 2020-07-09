import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SponsorshipReportComponent } from './sponsorship-report.component';

describe('SponsorshipReportComponent', () => {
  let component: SponsorshipReportComponent;
  let fixture: ComponentFixture<SponsorshipReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SponsorshipReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SponsorshipReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
