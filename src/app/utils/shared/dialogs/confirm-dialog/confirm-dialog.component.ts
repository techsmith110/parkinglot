import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { CONFIRM_MODAL_DATA } from 'app/models/common';

@Component({
    // tslint:disable-next-line: component-selector
    selector: 'confirm-dialog',
    templateUrl: './confirm-dialog.component.html',
    styleUrls: ['./confirm-dialog.component.scss']
})
export class ConfirmDialogComponent implements OnInit {

    constructor(
        public dialogRef: MatDialogRef<ConfirmDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: CONFIRM_MODAL_DATA
    ) { }

    ngOnInit() {
    }
    close(confirm?) {
        this.dialogRef.close(confirm);
    }
}
