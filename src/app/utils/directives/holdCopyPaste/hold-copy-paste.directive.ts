import { Directive, HostListener } from "@angular/core";

@Directive({
    selector: "[holdCopyPaste]"
})
export class HoldCopyPasteDirective {
    constructor() {}

    // can not paste
    @HostListener("paste", ["$event"]) blockPaste(e: KeyboardEvent) {
        e.preventDefault();
    }

    // can not copy
    @HostListener("copy", ["$event"]) blockCopy(e: KeyboardEvent) {
        e.preventDefault();
    }

    // can not cut
    @HostListener("cut", ["$event"]) blockCut(e: KeyboardEvent) {
        e.preventDefault();
    }
}
