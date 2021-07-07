describe('angular', () => {
  beforeEach(() => cy.visit('/iframe.html?id=progresscomponent--primary&args=min:0;max:100;value:0;showLabel:false;displayWith;'));
  it('should render the component', () => {
    cy.get('fds-progress').should('exist');
  });
});