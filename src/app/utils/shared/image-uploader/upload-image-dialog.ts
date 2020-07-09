import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ImageCroppedEvent } from 'ngx-image-cropper';
// tslint:disable: component-selector
// tslint:disable: component-selector
@Component({
    selector: 'upload-image',
    template: `
    <div mat-dialog-content *ngIf="imageChangedEvent" >
        <div fxLayout="row" fxLayoutAlign.lt-md="column">
             <div fxFlex="75" class="h-400">
                 <image-cropper  [imageChangedEvent]="imageChangedEvent" [maintainAspectRatio]="true"
                     [aspectRatio]="4 / 4" [resizeToWidth]="256" format="png" (imageCropped)="imageCropped($event)"
                     (imageLoaded)="imageLoaded()" (cropperReady)="cropperReady()" (loadImageFailed)="loadImageFailed()">
                 </image-cropper>
             </div>
             <div fxLayout="column" fxLayoutAlign="space-evenly" fxFlex="25">
                 <img [src]="croppedImage" />
            </div>
        </div>
    </div>
    <div mat-dialog-actions class="stick-end">
        <button mat-raised-button type="button" color="accent" (click)="close()">
            Cancel
        </button>
        <button mat-raised-button type="button" color="accent" (click)="close(true)">
            Save Image
        </button>
    </div>
    `,
})
export class UploadImageComponent {
    croppedImage: any = '';
    imageChangedEvent: any;

    constructor(public dialogRef: MatDialogRef<UploadImageComponent>,
                @Inject(MAT_DIALOG_DATA) public data) {
        this.imageChangedEvent = data.image;
    }

    close(file?): void {
        this.dialogRef.close(file ? this.croppedImage : undefined);
    }
    imageCropped(event?: ImageCroppedEvent) {
        this.croppedImage = event.base64;
    }
    imageLoaded() {
        // show cropper
    }
    cropperReady() {
        // cropper ready
    }
    loadImageFailed() {
        // show message
    }
}
