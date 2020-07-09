import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "./auth/auth.guard";
import { LoginComponent } from "./auth/login/login.component";
import { AngularMaterialModule } from "./angular-material.module";
import { LoginModule } from "./auth/login/login.module";
import { ForgotPasswordComponent } from './auth/forgot-password/forgot-password.component';
import { ForgotPasswordModule } from './auth/forgot-password/forgot-password.module';
import { ResetPasswordComponent } from './auth/reset-password/reset-password.component';
import { ResetPasswordModule } from './auth/reset-password/reset-password.module';
import { RoleGuardService } from './auth/auth-role-guard';
import { JwtModule, JwtHelperService } from '@auth0/angular-jwt';
import { RegisterComponent } from './auth/register/register.component';
import { RegisterModule } from './auth/register/register.module';

const routes: Routes = [
    { path: "", component: LoginComponent },
    { path: "login", component: LoginComponent },
    { path: "register", component: RegisterComponent },
    { path: "forgot-password", component: ForgotPasswordComponent },
    { path: "reset-password", component: ResetPasswordComponent },
    {
        path: "dashboard",
        loadChildren: () => import('./pages/dashboards/project/project.module').then(m => m.ProjectDashboardModule),
        canActivate: [AuthGuard]
    },
    { path: "auth", loadChildren: () => import("./auth/auth.module").then(m => m.AuthModule) },
    { path: "admin", loadChildren: () => import("./pages/admin/admin.module").then(m => m.AdminModule) },
    { path: '**', redirectTo: '' }
];

@NgModule({
    imports: [
        AngularMaterialModule,
        LoginModule,
        RegisterModule,
        ForgotPasswordModule,
        ResetPasswordModule,
        JwtModule,
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule],
    providers: [AuthGuard, RoleGuardService, JwtHelperService]
})
export class AppRoutingModule { }
