describe('Calculator E2E Tests', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should perform basic arithmetic operations', () => {
    // Test addition
    cy.get('[data-testid="digit-5"]').click();
    cy.get('[data-testid="operator-add"]').click();
    cy.get('[data-testid="digit-3"]').click();
    cy.get('[data-testid="equals"]').click();
    cy.get('[data-testid="display"]').should('have.text', '8');

    // Test subtraction
    cy.get('[data-testid="clear"]').click();
    cy.get('[data-testid="digit-8"]').click();
    cy.get('[data-testid="operator-subtract"]').click();
    cy.get('[data-testid="digit-3"]').click();
    cy.get('[data-testid="equals"]').click();
    cy.get('[data-testid="display"]').should('have.text', '5');

    // Test multiplication
    cy.get('[data-testid="clear"]').click();
    cy.get('[data-testid="digit-4"]').click();
    cy.get('[data-testid="operator-multiply"]').click();
    cy.get('[data-testid="digit-3"]').click();
    cy.get('[data-testid="equals"]').click();
    cy.get('[data-testid="display"]').should('have.text', '12');

    // Test division
    cy.get('[data-testid="clear"]').click();
    cy.get('[data-testid="digit-9"]').click();
    cy.get('[data-testid="operator-divide"]').click();
    cy.get('[data-testid="digit-3"]').click();
    cy.get('[data-testid="equals"]').click();
    cy.get('[data-testid="display"]').should('have.text', '3');
  });

  it('should handle decimal numbers', () => {
    cy.get('[data-testid="digit-5"]').click();
    cy.get('[data-testid="decimal"]').click();
    cy.get('[data-testid="digit-2"]').click();
    cy.get('[data-testid="display"]').should('have.text', '5.2');
  });

  it('should clear the display', () => {
    cy.get('[data-testid="digit-5"]').click();
    cy.get('[data-testid="digit-5"]').click();
    cy.get('[data-testid="clear"]').click();
    cy.get('[data-testid="display"]').should('have.text', '0');
  });

  it('should handle multiple operations in sequence', () => {
    cy.get('[data-testid="digit-5"]').click();
    cy.get('[data-testid="operator-add"]').click();
    cy.get('[data-testid="digit-3"]').click();
    cy.get('[data-testid="operator-multiply"]').click();
    cy.get('[data-testid="digit-2"]').click();
    cy.get('[data-testid="equals"]').click();
    cy.get('[data-testid="display"]').should('have.text', '16');
  });

  it('should handle equals button with no pending operation', () => {
    cy.get('[data-testid="digit-5"]').click();
    cy.get('[data-testid="equals"]').click();
    cy.get('[data-testid="display"]').should('have.text', '5');
  });

  it('should reset calculator state after equals', () => {
    cy.get('[data-testid="digit-5"]').click();
    cy.get('[data-testid="operator-add"]').click();
    cy.get('[data-testid="digit-3"]').click();
    cy.get('[data-testid="equals"]').click();
    cy.get('[data-testid="digit-2"]').click();
    cy.get('[data-testid="display"]').should('have.text', '2');
  });
}); 