import {Directive, ElementRef, Input} from "@angular/core";

@Directive({
    selector: '[fdsFocusable]'
})
export class FocusableDirective {
    constructor(private el: ElementRef) {
    }

    @Input() set fdsFocusable(focus: boolean) {
        if (focus) {
            this.el.nativeElement.focus();
        } else {
            this.el.nativeElement.blur();
        }
    }
}
