import { Component } from '@angular/core';
import { FieldArrayType } from '@ngx-formly/core';

@Component({
    // tslint:disable-next-line: component-selector
    selector: 'formly-repeat-section',
    styleUrls: ['./formly.scss'],

    template: `
    <div [class]="field.templateOptions.class" *ngFor="let field of field.fieldGroup; let i = index;" fxLayout="row" fxLayoutAlign="space-between center">
      <formly-field [field]="field"></formly-field>
      <button mat-button color="primary" type="button" (click)="remove(i)">
          <mat-icon>delete_outline</mat-icon>
      </button>
    </div>
    <div style="margin:30px 0;">
      <button mat-button color="primary" type="button" (click)="add()">{{ to.addText }}</button>
    </div>
  `,
})
export class RepeatTypeComponent extends FieldArrayType { }