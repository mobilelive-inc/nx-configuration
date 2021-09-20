import { ComponentFixture, TestBed } from '@angular/core/testing';
import {Component, NO_ERRORS_SCHEMA} from "@angular/core";

import {AccordionComponent, AccordionTabComponent} from './accordion.component';
import {NoopAnimationsModule} from "@angular/platform-browser/animations";
import {By} from "@angular/platform-browser";

@Component({
  template: `
    <fds-accordion>
      <fds-accordion-tab
          accordionTabClass="d--flex justify--content--between btn btn--primary btn--first w--100 mb--1"
          [header]="header1"
          [selected]="true"
      >
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </fds-accordion-tab>
      <fds-accordion-tab
          accordionTabClass="d--flex justify--content--between btn btn--primary btn--first w--100 mb--1"
          header="Header II"
      >
        <p>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
          qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit,
          sed quia non numquam eius modi.
        </p>
      </fds-accordion-tab>
      <fds-accordion-tab
          accordionTabClass="d--flex justify--content--between btn btn--primary btn--first w--100 mb--1"
          header="Header III"
      >
        <p>
          At vero eos et accusamus et iusto odio dignissimos ducimus qui
          blanditiis praesentium voluptatum deleniti atque corrupti quos dolores
          et quas molestias excepturi sint occaecati cupiditate non provident,
          similique sunt in culpa qui officia deserunt mollitia animi, id est
          laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita
          distinctio. Nam libero tempore, cum soluta nobis est eligendi optio
          cumque nihil impedit quo minus.
        </p>
      </fds-accordion-tab>
    </fds-accordion>
  `
})

class TestAccordionComponent {
  header1 = "Header I";

  disabled = false;

  collapseIcon = 'icon-arrowdown';

  expandIcon = 'icon-arrowdown';

  styl: any;



}

describe('AccordionComponent', () => {
  let component: AccordionComponent;
  let firstAccordionTab = AccordionTabComponent;
  let secondAccordionTab = AccordionTabComponent;
  let thirdAccordionTab = AccordionTabComponent;
  let fixture: ComponentFixture<TestAccordionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      imports:[ NoopAnimationsModule],
      declarations: [ AccordionComponent, AccordionTabComponent, TestAccordionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestAccordionComponent);
    component = fixture.debugElement.children[0].componentInstance;
    firstAccordionTab = fixture.debugElement.children[0].children[0].children[0].componentInstance;
    secondAccordionTab = fixture.debugElement.children[0].children[0].children[1].componentInstance;
    thirdAccordionTab = fixture.debugElement.children[0].children[0].children[2].componentInstance;
    fixture.detectChanges();
  });


  it('should have three accordion tabs', () => {
    fixture.detectChanges();

    expect(component.tabs.length).toBe(3);
  })

  it('Should change header title', () => {
    fixture.detectChanges();

    fixture.componentInstance.header1 = "Friday Design System";

    fixture.detectChanges();

    const accordionTabHeader = fixture.debugElement.children[0].children[0].children[0].query(By.css('.fds-accordion-header-text'));

    expect(accordionTabHeader.nativeElement.textContent).toContain('Friday Design System')
  })
});
