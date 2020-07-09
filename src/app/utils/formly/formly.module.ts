import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormlyComponent } from "./formly.component";
import { ReactiveFormsModule } from "@angular/forms";
import { FormlyModule } from "@ngx-formly/core";
import { FormlyFieldInputComponent } from "./form-controls/input";
import { MatFormFieldModule, MatIconModule, MatInputModule, MatStepperModule, MatButtonModule, MatSelectModule, MatRadioModule, MatCheckboxModule, MatDatepickerModule, MatSliderModule, MatSlideToggleModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DirectivesModule } from '../directives/directives.module';
import { WizardComponent } from './wizard/wizard.component';
import { RepeatTypeComponent } from './form-controls/repeat';
import { FormlyFieldSelectComponent } from './form-controls/select';
import { FormlyFieldRadioComponent } from './form-controls/radio';
import { FormlyFieldCheckBoxComponent } from './form-controls/checkbox';
import { FormlyFieldSliderComponent } from './form-controls/slider';
import { FormlyFieldDatePickerComponent } from './form-controls/datepicker';

@NgModule({
    // tslint:disable-next-line: max-line-length
    declarations: [FormlyComponent, FormlyFieldSliderComponent , FormlyFieldCheckBoxComponent, FormlyFieldRadioComponent, FormlyFieldInputComponent, WizardComponent, RepeatTypeComponent, FormlyFieldSelectComponent, FormlyFieldDatePickerComponent],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatButtonModule,
        MatIconModule,
        MatInputModule,
        FlexLayoutModule,
        DirectivesModule,
        MatStepperModule,
        MatSelectModule,
        MatRadioModule,
        MatDatepickerModule,
        MatCheckboxModule,
        MatSliderModule,
        FormlyModule.forRoot({
            types: [
                { name: "input", component: FormlyFieldInputComponent },
                { name: "repeat", component: RepeatTypeComponent },
                { name: "select", component: FormlyFieldSelectComponent },
                { name: "radio", component: FormlyFieldRadioComponent },
                { name: "checkbox", component: FormlyFieldCheckBoxComponent },
                { name: "slider", component: FormlyFieldSliderComponent },
            ],
        }),
    ],
    exports: [FormlyComponent, WizardComponent]
})
export class AunFormlyModule { }
