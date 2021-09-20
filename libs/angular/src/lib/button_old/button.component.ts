import {
    Component,
    Input,
    AfterContentInit,
    TemplateRef,
    EventEmitter,
    Output,
    ViewEncapsulation,
} from '@angular/core';

@Component({
    selector: 'fds-old-button',
    templateUrl: './button.component.html',
    styleUrls: ['./button.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class ButtonComponent {
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