import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';
import { FormArray, FormGroup } from '@angular/forms';

export interface StepType {
    label: string;
    fields: FormlyFieldConfig[];
}

@Component({
    // tslint:disable-next-line: component-selector
    selector: 'formly-wizard',
    templateUrl: './wizard.component.html',
    styleUrls: ['./wizard.component.scss']
})
export class WizardComponent implements OnChanges {

    activedStep = 0;

    @Input() model = {};
    @Input() steps: StepType[] = [];
    form: any = {};
    options: any = [];
    ngOnChanges(c) {
        if (c.steps && c.steps.currentValue) {
            this.steps = c.steps.currentValue;
            // tslint:disable-next-line: no-angle-bracket-type-assertion
            this.options = this.steps.map(() => <FormlyFormOptions> {});
            this.form = new FormArray(this.steps.map(() => new FormGroup({})));
        }
    }

    prevStep(step) {
        this.activedStep = step - 1;
    }

    nextStep(step) {
        this.activedStep = step + 1;
    }

    submit() {
        alert(JSON.stringify(this.model));
    }
}
