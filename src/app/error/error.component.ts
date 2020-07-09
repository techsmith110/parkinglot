import { Component, Inject, OnInit, OnDestroy } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";
import { Subscription } from "rxjs";

import { ErrorService } from "./error.service";

@Component({
    templateUrl: "./error.component.html",
    selector: "app-error",
    styleUrls: ["./error.component.css"]
})
export class ErrorComponent implements OnInit, OnDestroy {
    private errorSub: Subscription;
    constructor(private errorService: ErrorService, private dialogRef: MatDialogRef<ErrorComponent>, @Inject(MAT_DIALOG_DATA) public data: { message: string }) { }

    ngOnInit() {
        this.errorSub = this.errorService.getErrorListener().subscribe(message => {
            this.data = { message };
        });
    }
    close() {
        this.dialogRef.close();
        this.errorService.handleError();
    }
    onHandleError() {
        this.errorService.handleError();
    }

    ngOnDestroy() {
        this.errorSub.unsubscribe();
    }
}
