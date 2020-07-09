import { Component, Input } from "@angular/core";
import { FieldType } from "@ngx-formly/core";

@Component({
    // tslint:disable-next-line: component-selector
    selector: "formly-field-input",
    styleUrls: ['./formly.scss'],

    template: `
            <mat-form-field [class]="field.templateOptions.class" [appearance]="field.templateOptions.appearance">
            <mat-label>{{field.templateOptions.label}}</mat-label>
            <mat-slider matInput [formControl]="formControl" [formlyAttributes]="field"></mat-slider>
            <mat-icon matSuffix>{{field.templateOptions.icon}}</mat-icon>
            <mat-error>{{field.validation?.messages.required}}</mat-error>
        </mat-form-field>
 `,
})
export class FormlyFieldSliderComponent extends FieldType { }
