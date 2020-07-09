import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { AngularMaterialModule } from "../angular-material.module";
import { AuthRoutingModule } from "./auth-routing.module";
import { AuthService } from './auth.service';
import { AuthInterceptor } from './auth-interceptor';
import { AuthGuard } from './auth.guard';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

@NgModule({
    declarations: [],
    imports: [CommonModule, AngularMaterialModule, FormsModule, AuthRoutingModule],
    providers: [AuthService, { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }, AuthGuard]
})
export class AuthModule { }
