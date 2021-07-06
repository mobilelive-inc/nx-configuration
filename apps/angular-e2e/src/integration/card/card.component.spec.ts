describe('angular', () => {
  beforeEach(() => cy.visit('/iframe.html?id=cardcomponent--primary&args=style;cardClass;headerClass;bodyClass;footerClass;'));
  it('should render the component', () => {
    cy.get('fds-card').should('exist');
  });
});