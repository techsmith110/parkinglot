import {
    HttpInterceptor,
    HttpRequest,
    HttpHandler,
} from "@angular/common/http";
import { Injectable } from "@angular/core";

import { AuthService } from "./auth.service";
import { tap } from 'rxjs/operators';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    constructor(private authService: AuthService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler) {
        const authToken = this.authService.getToken();
        const authRequest = authToken ? req.clone({
            headers: req.headers.set("Authorization", "Bearer " + authToken)
        }) : req.clone({
            headers: req.headers.set("Authorization", "Bearer")
        });
        return next.handle(authRequest).pipe(
            // tap((re: any)=>{console.log(re && re.headers)})
        );
    }
}
