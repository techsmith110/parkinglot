import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { FormlyComponent } from "./formly.component";
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule, MatIconModule, MatInputModule } from '@angular/material';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyMaterialModule } from '@ngx-formly/material';
import { FormlyFieldInputComponent } from './form-controls/input';

describe("FormlyComponent", () => {
  let component: FormlyComponent;
  let fixture: ComponentFixture<FormlyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormlyComponent, FormlyFieldInputComponent ],
      imports: [
        ReactiveFormsModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        FormlyModule.forRoot({
            types: [
                { name: "input", component: FormlyFieldInputComponent },
            ],
        }),
        FormlyMaterialModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
