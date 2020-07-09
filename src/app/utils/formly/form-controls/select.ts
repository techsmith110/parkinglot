import { Component, Input } from "@angular/core";
import { FieldType } from "@ngx-formly/core";

@Component({
    // tslint:disable-next-line: component-selector
    // tslint:disable: max-line-length
    selector: "formly-field-select",
    styleUrls: ['./formly.scss'],
    template: `
        <mat-form-field [class]="field.templateOptions.class"  [appearance]="field.templateOptions.appearance">
        <mat-label>{{field.templateOptions.label}}</mat-label>
        <mat-select [placeholder]="field.templateOptions.placeholder" [formControl]="formControl" [multiple]="field.templateOptions.multiple">
            <mat-select-trigger>
            {{formControl.value ? formControl.value[0] : ''}}
            </mat-select-trigger>
            <mat-option *ngFor="let option of field.templateOptions.options" [value]="option.value">{{option.label}}</mat-option>
        </mat-select>
        </mat-form-field>
 `,
})
export class FormlyFieldSelectComponent extends FieldType { }
