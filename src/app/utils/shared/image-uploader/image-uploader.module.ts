import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageUploaderComponent } from './image-uploader.component';
import { ImageCropperModule } from 'ngx-image-cropper';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule, MatDialogModule, MatFormFieldModule, MatProgressSpinnerModule } from '@angular/material';
import { UploadImageComponent } from './upload-image-dialog';

@NgModule({
    declarations: [ImageUploaderComponent, UploadImageComponent],
    entryComponents: [UploadImageComponent],
    imports: [
        CommonModule,
        ImageCropperModule,
        FlexLayoutModule,
        MatButtonModule,
        MatDialogModule,
        MatFormFieldModule,
        MatProgressSpinnerModule,
    ],
    exports: [ImageUploaderComponent]
})
export class ImageUploaderModule { }
