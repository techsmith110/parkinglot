import {
    HttpInterceptor,
    HttpRequest,
    HttpHandler,
    HttpErrorResponse
} from "@angular/common/http";
import { catchError, tap, finalize, distinctUntilChanged } from "rxjs/operators";
import { throwError } from "rxjs";
import { Injectable } from "@angular/core";
import { MatDialog } from "@angular/material";
import { ErrorComponent } from "./error/error.component";
import { Router } from '@angular/router';
import { ErrorService } from './error/error.service';
import { GlobalTranslateService } from './providers/global-translate.service';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

    constructor(private dialog: MatDialog, private router: Router,
                private errorService: ErrorService,
                private transService: GlobalTranslateService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler) {
        return next.handle(req).pipe(
            catchError((data: HttpErrorResponse) => {
                console.log('data from error: ', data);
                let errorMessage = this.transService.translate("An unknown error occurred!");
                if (data && data.error && data.error.message) {
                    errorMessage = data.error.message;
                    this.dialog.open(ErrorComponent, { data: { message: this.transService.translate(errorMessage) } })
                        .afterClosed().subscribe(__ => {
                            if (errorMessage === 'Error occured while processing the token' || errorMessage === 'Invalid Token') { this.router.navigate(['login']); }
                        });
                }
                return throwError(data);
            }),
        );
    }
}
