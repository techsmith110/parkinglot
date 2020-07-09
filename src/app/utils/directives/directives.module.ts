import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RestrictInputDirective } from './restrictInput/restrictInput.directive';
import { HoldCopyPasteDirective } from './holdCopyPaste/hold-copy-paste.directive';

@NgModule({
  declarations: [RestrictInputDirective, HoldCopyPasteDirective],
  imports: [
    CommonModule
  ],
  exports: [RestrictInputDirective, HoldCopyPasteDirective]
})
export class DirectivesModule { }
