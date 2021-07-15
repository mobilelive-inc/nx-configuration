describe('angular', () => {
  beforeEach(() => cy.visit('/iframe.html?id=buttoncomponent--primary&args=type:button;iconPos:left;icon;badge;label;ariaDisabled;style;className;badgeClass;'));
  it('should render the component', () => {
    cy.get('fds-button').should('exist');
  });
});