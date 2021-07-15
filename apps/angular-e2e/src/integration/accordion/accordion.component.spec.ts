describe('angular', () => {
  beforeEach(() => cy.visit('/iframe.html?id=accordiontabcomponent--primary&args=header;accordionTabClass;disabled;cache:true;transitionOptions:400ms+cubic-bezier(0.86,+0,+0.07,+1);selected;multiple;style;fdsAccordionClass;expandIcon:icon-arrowdown;collapseIcon:icon-arrowdown;activeIndex;'));
  it('should render the component', () => {
    cy.get('fds-accordionTab').should('exist');
  });
});