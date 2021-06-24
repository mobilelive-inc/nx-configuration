describe('react-components-lib: ReactComponentsLib component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=reactcomponentslib--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to react-components-lib!');
    });
});
