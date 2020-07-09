import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportsComponent } from './reports.component';
import { DynamicTableModule } from 'app/utils/shared/dynamic-table/dynamic-table.module';
import { ReportResolve } from './reports.resolver';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { ConsolidateReportComponent } from './consolidate-report/consolidate-report.component';
import { DonorProfileReportComponent } from './donor-profile-report/donor-profile-report.component';
import { IslamicReportComponent } from './islamic-report/islamic-report.component';
import { SponsorshipReportComponent } from './sponsorship-report/sponsorship-report.component';
import { ProjectionReportComponent } from './projection-report/projection-report.component';
import { AccountingReportComponent } from './accounting-report/accounting-report.component';
import { MatFormFieldModule, MatIconModule, MatInputModule } from '@angular/material';
import { DateToAndFromModule } from 'app/utils/date-to-and-from/date-to-and-from.module';
import { FilterFormModule } from 'app/utils/filter-form/filter-form.module';



@NgModule({
    declarations: [
        ReportsComponent, ConsolidateReportComponent, 
        DonorProfileReportComponent, IslamicReportComponent, SponsorshipReportComponent, ProjectionReportComponent, AccountingReportComponent],
    imports: [
        CommonModule,
        DynamicTableModule,
        TranslateModule,
        FilterFormModule,
        RouterModule.forChild([
            { path: ':id', component: ReportsComponent, resolve: { data: ReportResolve } },
        ])
    ],
    providers: [ReportResolve],
    exports: []
})
export class ReportsModule { }
