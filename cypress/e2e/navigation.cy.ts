describe('Navigation tests', () => {
  beforeEach(() => {
    // Intercept the ecosystem data API call and mock the response using a JSON fixture
    cy.fixture('ecosystemMockData.json').then((ecosystemData) => {
      cy.intercept('GET', '**/metrics/ecosystem', {
        statusCode: 200,
        body: ecosystemData,
      }).as('fetchEcosystemData');
    });

    // Intercept the chain data API call and mock the response using a JSON fixture for chainId 324
    cy.fixture('chainMockData.json').then((chainData) => {
      cy.intercept('GET', '**/metrics/zkchain/*', {
        statusCode: 200,
        body: chainData,
      }).as('fetchChainData');
    });

    // Intercept the chain data API call and mock the response using a JSON fixture for chainId 324
    cy.fixture('nextData.json').then((nextData) => {
      cy.intercept('GET', '/_next/data/development/en/324.json?chain=324', {
        statusCode: 200,
        body: nextData,
      }).as('fetchNextData');
    });

    cy.visit('/');
  });

  it('should navigate to search page, type a query, navigate to chain details, and go back to home on breadcrumb', () => {
    cy.getByTestId('search-bar').click();
    cy.url().should('include', '/search');

    cy.getByTestId('search-bar').find('input').click().type('Invalid chain name');
    cy.get('input').should('have.value', 'Invalid chain name');
    cy.getByTestId('data-not-found').should('be.visible');

    cy.getByTestId('search-bar').find('input').clear();
    cy.get('input').should('have.value', '');

    cy.getByTestId('search-bar').find('input').type('324');
    cy.getByTestId('chain-row').should('be.visible').click();

    cy.getByTestId('chain-id').should('be.visible').and('contain', '324');
    cy.url().should('include', '/324');

    cy.getByTestId('home-breadcrumb').click();
    cy.url().should('eq', 'http://localhost:5173/');
    cy.getByTestId('search-bar').find('input').should('have.value', '');
  });

  it('should navigate to tokens page, on all tokens button click', () => {
    cy.getByTestId('all-tokens-button').click();
    cy.url().should('include', '/tokens');

    cy.getByTestId('tokens-title').should('be.visible');
    cy.getByTestId('tokens-row').should('be.visible');
  });

  it('should navigate to chain page by clicking on dashboard chain row', () => {
    cy.getByTestId('chains-dashboard').should('be.visible');
    cy.getByTestId('chain-row').first().click();
    cy.url().should('include', '/324');

    cy.getByTestId('chain-id').should('be.visible').and('contain', '324');
  });
});
