describe('Navigation tests', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should navigate to search page, type a query, navigate to chain details, and go back to home on breadcrumb', () => {
    cy.get('[data-test="search-bar"]').click();
    cy.url().should('include', '/search');

    cy.get('[data-test="search-bar"]').find('input').click().type('Invalid chain name');
    cy.get('input').should('have.value', 'Invalid chain name');
    cy.get('[data-test="data-not-found"').should('be.visible');

    cy.get('[data-test="search-bar"]').find('input').clear();
    cy.get('input').should('have.value', '');

    cy.get('[data-test="search-bar"]').find('input').click().type('324');
    cy.get('[data-test="chain-row"]').should('be.visible').click();
    cy.url().should('include', '/324');

    cy.get('[data-test="home-breadcrumb"]').click();
    cy.url().should('eq', 'http://localhost:5173/');
    cy.get('[data-test="search-bar"]').find('input').should('have.value', '');
  });

  it('should navigate to tokens page, on all tokens button click', () => {
    cy.get('[data-test="all-tokens-button"]').click();
    cy.url().should('include', '/tokens');

    cy.get('[data-test="tokens-title"]').should('be.visible');
    cy.get('[data-test="tokens-row"]').should('be.visible');
  });

  it('should navigate to chain page by clicking on dashboard chain row', () => {
    cy.get('[data-test="chains-dashboard"]').should('be.visible');
    cy.get('[data-test="chain-row"]').first().click();
    cy.url().should('include', '/324');

    cy.get('[data-test="chain-id').should('be.visible').and('contain', '324');
  });
});
