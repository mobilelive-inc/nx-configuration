describe('angular', () => {
  beforeEach(() => cy.visit('/iframe.html?id=checkboxcomponent--primary&args=value;name;disabled;binary;label;ariaLabelledBy;tabindex;inputId;style;styleClass;labelStyleClass;formControl;checkboxIcon;readonly;required;'));
  it('should render the component', () => {
    cy.get('fds-checkbox').should('exist');
  });
});