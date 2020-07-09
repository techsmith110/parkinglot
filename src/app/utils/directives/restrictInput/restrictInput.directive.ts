import { Directive, HostListener, Input } from "@angular/core";

@Directive({
    selector: "[RestrictInput]"
})
export class RestrictInputDirective {
    @Input() OnlyNumber: boolean;
    @Input() OnlyAlphabet: boolean;
    @Input() DisallowSpace: boolean;

    constructor() {}

    @HostListener("keydown", ["$event"]) onKeyDown(event) {
        const e = event as KeyboardEvent;
        if (this.ctrlsSelectorsCondition(e)) return;

        if (this.OnlyNumber) {
            let text = e.key;
            let transformedInput = text.replace(/[^0-9]/g, '');
            if (e.shiftKey || transformedInput != text) e.preventDefault();
            
        } else if (this.OnlyAlphabet) {
            let text = e.key;
            let transformedInput = text.replace(/[^a-z ]/gi, '');
            if (transformedInput != text || (event.which === 32 && event.target.selectionStart === 0)) e.preventDefault();
        }
        else if (this.DisallowSpace) if(event.which === 32 && event.target.selectionStart === 0) e.preventDefault();
    }
    ctrlsSelectorsCondition(e) {
        // Allow
        /*
          1-> Back Space (8)
          2-> Tab (9)
          3) Back Key (<-) (37)
          4) Forward Key (->) (39)
        */
        if ([8, 9, 37, 39].indexOf(e.keyCode) !== -1) return true;
        return false;
    }
}
