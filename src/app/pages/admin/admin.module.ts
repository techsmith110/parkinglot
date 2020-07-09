import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { RouterModule } from '@angular/router';
import { ReportsComponent } from './reports/reports.component';
import { ReportsModule } from './reports/reports.module';

@NgModule({
    declarations: [AdminComponent],
    imports: [
        CommonModule,
        ReportsModule,
        RouterModule.forChild([
            { path: 'reports', loadChildren: () => import('./reports/reports.module').then(m => m.ReportsModule), },
        ])
    ],
    exports: [
        AdminComponent,
    ]
})
export class AdminModule { }
