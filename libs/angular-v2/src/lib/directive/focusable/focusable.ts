import {Directive, ElementRef, Input, NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";

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

@NgModule({
    declarations: [FocusableDirective],
    imports: [CommonModule],
    exports: [FocusableDirective]
})
export class FocusableModule {

}
