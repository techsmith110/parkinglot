import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule, MatInputModule, MatIconModule, MatSelectModule } from '@angular/material';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule } from '@angular/forms';
import { SelectFieldComponent } from './select-field.component';



@NgModule({
    declarations: [SelectFieldComponent],
    imports: [
        CommonModule,
        MatFormFieldModule,
        MatInputModule,
        MatIconModule,
        TranslateModule,
        MatSelectModule,
        FormsModule
    ],
    exports: [SelectFieldComponent]
})
export class SelectFieldModule { }
