import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DateToAndFromComponent } from './date-to-and-from.component';

describe('DateToAndFromComponent', () => {
  let component: DateToAndFromComponent;
  let fixture: ComponentFixture<DateToAndFromComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DateToAndFromComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DateToAndFromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
