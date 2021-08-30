import {
  Component,
  Input,
  ContentChild,
  ContentChildren,
  TemplateRef,
  QueryList,
  AfterContentInit
} from '@angular/core';
import { Template, HeaderComponent, FooterComponent } from '../shared/shared';

@Component({
  selector: 'fds-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent  implements AfterContentInit{
  @Input() style: any;

  @Input() cardClass: string;

  @Input() headerClass: string;

  @Input() bodyClass: string;

  @Input() footerClass: string;

  @ContentChild(HeaderComponent) headerFacet;

  @ContentChild(FooterComponent) footerFacet;

  @ContentChildren(Template) templates: QueryList<any>;

  headerTemplate: TemplateRef<any>;

  contentTemplate: TemplateRef<any>;

  footerTemplate: TemplateRef<any>;


  ngAfterContentInit() {
    this.templates.forEach(item => {
      switch (item.getType()) {
        case 'header':
          this.headerTemplate = item.template;
          break;

        case 'content':
          this.contentTemplate = item.template;
          break;

        case 'footer':
          this.footerTemplate = item.template;
          break;

        default:
          this.contentTemplate = item.template;
          break;
      }
    });
  }
}
