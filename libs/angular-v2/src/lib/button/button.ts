import {Component, EventEmitter, Input, NgModule, Output, TemplateRef} from "@angular/core";
import {CommonModule} from "@angular/common";


@Component({
    selector: 'fds-v2-button',
    template: `
        <button
                [attr.type]="type"
                [class]="className"
                [ngStyle]="style"
                [attr.aria-disabled]="ariaDisabled"
                [ngClass]="{
        btn: true,
        'p-button-icon-only': icon && !label,
        'p-button-vertical':
          (iconPos === 'top' || iconPos === 'bottom') && label
      }"
                (click)="!ariaDisabled && onClick.emit($event)"
                (focus)="!ariaDisabled && onFocus.emit($event)"
                (blur)="!ariaDisabled && onBlur.emit($event)"
        >
            <ng-content></ng-content>
            <ng-container *ngTemplateOutlet="contentTemplate"></ng-container>
            <span
                    [ngClass]="{
          'p-button-icon': true,
          'p-button-icon-left': iconPos === 'left' && label,
          'p-button-icon-right': iconPos === 'right' && label,
          'p-button-icon-top': iconPos === 'top' && label,
          'p-button-icon-bottom': iconPos === 'bottom' && label
        }"
                    [class]="icon"
                    *ngIf="icon"
                    [attr.aria-hidden]="true"
            ></span>
            <span class="p-button-label" [attr.aria-hidden]="icon && !label">{{
                label || '&nbsp;'
                }}</span>
            <span [ngClass]="'p-badge'" *ngIf="badge" [class]="badgeClass">{{
                badge
                }}</span>
        </button>
    `
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
export class ButtonModule{}
