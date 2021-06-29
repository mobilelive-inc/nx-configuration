import {
  Component,
  Input,
  AfterContentInit,
  TemplateRef,
  EventEmitter,
  Output,
  ViewEncapsulation
} from '@angular/core';

@Component({
  selector: 'fds-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements AfterContentInit {
  @Input() type: string = 'button';

  @Input() iconPos: string = 'left';

  @Input() icon: string;

  @Input() badge: string;

  @Input() label: string;

  @Input() ariaDisabled: boolean;

  @Input() style: any;

  @Input() className: string;

  @Input() badgeClass: string;

  contentTemplate: TemplateRef<any>;

  // @ContentChildren(PrimeTemplate) templates: QueryList<any>;

  @Output() onClick: EventEmitter<any> = new EventEmitter();

  @Output() onFocus: EventEmitter<any> = new EventEmitter();

  @Output() onBlur: EventEmitter<any> = new EventEmitter();

  ngAfterContentInit() {
    // this.templates.forEach((item) => {
    //     switch (item.getType()) {
    //         case 'content':
    //             this.contentTemplate = item.template;
    //             break;
    //
    //         default:
    //             this.contentTemplate = item.template;
    //             break;
    //     }
    // });
  }


}
