import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterFormComponent } from './filter-form.component';
import { MatCardModule, MatFormFieldModule, MatInputModule, MatIconModule, MatSelectModule, MatButtonModule } from '@angular/material';
import { DateToAndFromModule } from '../date-to-and-from/date-to-and-from.module';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule } from '@angular/forms';
import { SelectFieldModule } from '../shared/common/select-field/select-field.module';

@NgModule({
    declarations: [FilterFormComponent],
    imports: [
        CommonModule,
        MatCardModule,
        DateToAndFromModule,
        MatFormFieldModule,
        MatInputModule,
        MatIconModule,
        TranslateModule,
        SelectFieldModule,
        MatButtonModule
    ],
    exports: [FilterFormComponent]
})
export class FilterFormModule { }
