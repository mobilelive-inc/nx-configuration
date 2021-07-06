describe('angular', () => {
  beforeEach(() => cy.visit('/iframe.html?id=formfieldcomponent--primary&args=label;hideRequiredMarker:false;iconLeft;iconRight;clearBtn:false;'));
  it('should render the component', () => {
    cy.get('fds-form-field').should('exist');
  });
});