import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { RoleGuardService } from 'app/auth/auth-role-guard';
import { AuthGuard } from 'app/auth/auth.guard';
import { ReportsComponent } from './reports/reports.component';
import { ReportsModule } from './reports/reports.module';

const routes: Routes = [
    { path: 'reports', loadChildren: './reports/reports.module#ReportsModule' },
];

@NgModule({
    imports: [
        ReportsModule,
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule],
    providers: [AuthGuard, RoleGuardService]
})
export class AdminRoutingModule { }
