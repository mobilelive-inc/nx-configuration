import {Component, EventEmitter, Input, NgModule, Output, TemplateRef} from "@angular/core";
import {CommonModule} from "@angular/common";


@Component({
    selector: 'fds-button',
    templateUrl: 'button.html'
})
export class Button {
    @Input() type = 'button';

    @Input() iconPos = 'left';

    @Input() icon: string;

    @Input() badge: string;

    @Input() label: string;

    @Input() ariaDisabled: boolean;

    @Input() style: any;

    @Input() className: string;

    @Input() badgeClass: string;

    contentTemplate: TemplateRef<any>;


    @Output() onClick: EventEmitter<any> = new EventEmitter();

    @Output() onFocus: EventEmitter<any> = new EventEmitter();

    @Output() onBlur: EventEmitter<any> = new EventEmitter();
}

@NgModule({
    declarations: [
        Button
    ],
    imports: [
        CommonModule
    ],
    exports: [
        Button
    ],
})
export class ButtonModule {
}
