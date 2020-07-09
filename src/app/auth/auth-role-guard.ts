import { Injectable } from '@angular/core';
import {
    Router,
    CanActivate,
    ActivatedRouteSnapshot
} from '@angular/router';
import { AuthService } from './auth.service';
import { USER } from './auth-data.model';
@Injectable()
export class RoleGuardService implements CanActivate {
    constructor(public auth: AuthService, public router: Router) { }
    canActivate(route: ActivatedRouteSnapshot): boolean {
        const expectedRoles = route.data.expectedRoles;
        const user: USER = this.auth.getUser();
        if (
            !this.auth.getIsAuth() ||
            user.roleList.findIndex(r => r.roleName === expectedRoles.find(role => role === r.roleName)) < 0
        ) {
            this.router.navigate(['login']);
            return false;
        }
        return true;
    }
}