describe('angular', () => {
  beforeEach(() => cy.visit('/iframe.html?id=rangeslidercomponent--primary&args=displayWith;showMinMaxLabels:false;disabled;tabIndex;invert;max;min;step;thumbLabel;tickInterval;value;'));
  it('should render the component', () => {
    cy.get('fds-range-slider').should('exist');
  });
});