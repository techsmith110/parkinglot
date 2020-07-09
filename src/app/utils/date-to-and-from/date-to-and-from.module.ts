import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DateToAndFromComponent } from './date-to-and-from.component';
import { MatFormFieldModule, MatIconModule, MatDatepickerModule, MatInputModule } from '@angular/material';
import { FormsModule } from '@angular/forms';



@NgModule({
    declarations: [DateToAndFromComponent],
    imports: [
        CommonModule,
        FormsModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatDatepickerModule
    ],
    exports: [DateToAndFromComponent]
})
export class DateToAndFromModule { }
