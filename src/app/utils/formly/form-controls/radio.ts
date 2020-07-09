import { Component, Input } from "@angular/core";
import { FieldType } from "@ngx-formly/core";

@Component({
    // tslint:disable-next-line: component-selector
    selector: "formly-field-radio",
    styleUrls: ['./formly.scss'],

    template: `
                <mat-label class="title">{{field.templateOptions.label}}</mat-label>
                <mat-radio-group [class]="field.templateOptions.class" [formControl]="formControl">
                    <mat-radio-button *ngFor="let obj of field.templateOptions.options" [value]="obj.key">{{obj.label}}</mat-radio-button>
                    <mat-error>{{field.validation?.messages.required}}</mat-error>
                </mat-radio-group>
 `,
})
export class FormlyFieldRadioComponent extends FieldType { }
