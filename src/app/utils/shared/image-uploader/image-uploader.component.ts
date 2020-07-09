import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ImageCroppedEvent } from 'ngx-image-cropper';
import { MatDialog } from '@angular/material/dialog';
import { UploadImageComponent } from './upload-image-dialog';

@Component({
    // tslint:disable-next-line: component-selector
    selector: 'image-uploader',
    templateUrl: './image-uploader.component.html',
    styleUrls: ['./image-uploader.component.scss']
})
export class ImageUploaderComponent implements OnInit {

    @Output() fileSaved: EventEmitter<any> = new EventEmitter();

    imageChangedEvent: any = '';
    imageCropped: any;
    progress = 50;
    uploading: boolean;

    constructor(public dialog: MatDialog) { }

    ngOnInit() {
    }

    fileChangeEvent(event: any): void {
        if (event) {
            this.imageChangedEvent = event;
            this.openDialog(this.imageChangedEvent);
        }
    }

    saveImage() {
        const form = document.forms[0];
        const block = this.imageCropped.split(";");
        const contentType = block[0].split(":")[1];
        const realData = block[1].split(",")[1];
        const blob = this.b64toBlob(realData, contentType);
        const formDataToUpload = new FormData(form);
        formDataToUpload.append("file", blob);
        this.fileSaved.emit({value: blob});
    }
    private openDialog(image): void {
        const dialogRef = this.dialog.open(UploadImageComponent, {
            width: '800px',
            data: { image }
        });
        dialogRef.afterClosed().subscribe(result => {
            if (result) {
                this.imageCropped = result;
                this.saveImage();
            }
        });
    }

    private b64toBlob(b64Data: string, contentType: string, sliceSize?) {
        contentType = contentType || '';
        sliceSize = sliceSize || 512;

        const byteCharacters = atob(b64Data);
        const byteArrays = [];

        for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
            const slice = byteCharacters.slice(offset, offset + sliceSize);

            const byteNumbers = new Array(slice.length);
            for (let i = 0; i < slice.length; i++) {
                byteNumbers[i] = slice.charCodeAt(i);
            }

            const byteArray = new Uint8Array(byteNumbers);

            byteArrays.push(byteArray);
        }

        const blob = new Blob(byteArrays, { type: contentType });
        return blob;
    }
}

