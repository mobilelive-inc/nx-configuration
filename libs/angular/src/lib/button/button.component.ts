import {
  Component,
  Input,
  AfterContentInit,
  TemplateRef,
  EventEmitter,
  Output,
} from '@angular/core';

@Component({
  selector: 'fds-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
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
