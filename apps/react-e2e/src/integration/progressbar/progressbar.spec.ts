describe('react: Progressbar component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=progressbar--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to react!');
    });
});
