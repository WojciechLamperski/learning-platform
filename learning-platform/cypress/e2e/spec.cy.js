describe('template spec', () => {
  it('passes', () => {
    cy.visit('localhost:3000');
    cy.get('a').click();
    cy.get('a').click();
  })
})