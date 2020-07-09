import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicTableComponent } from './dynamic-table.component';
import { MatTableModule, MatSortModule, MatIconModule, MatButtonModule, MatPaginatorModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ConfirmDialogModule } from '../dialogs/confirm-dialog/confirm-dialog.module';
import {MatProgressBarModule} from '@angular/material/progress-bar';

@NgModule({
  declarations: [DynamicTableComponent],
  imports: [
    CommonModule,
    MatTableModule,
    MatSortModule,
    MatIconModule,
    MatButtonModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    FlexLayoutModule,
    ConfirmDialogModule,
    MatProgressBarModule,
  ],
  exports: [DynamicTableComponent]
})
export class DynamicTableModule { }
