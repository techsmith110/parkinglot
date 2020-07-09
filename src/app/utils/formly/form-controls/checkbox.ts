import { Component, Input } from "@angular/core";
import { FieldType } from "@ngx-formly/core";

@Component({
    // tslint:disable-next-line: component-selector
    selector: "formly-field-checkbox",
    styleUrls: ['./formly.scss'],

    template: `
        <mat-label >{{field.templateOptions.label}}</mat-label>
        <div [class]="field.templateOptions.class" [formGroupName]="formControl">
          <div *ngFor="let checkOpt of field.templateOptions.options">
          <mat-checkbox [value]="checkOpt.key">{{checkOpt.label}}</mat-checkbox>
          </div>
        </div>
 `,
})
export class FormlyFieldCheckBoxComponent extends FieldType { }
