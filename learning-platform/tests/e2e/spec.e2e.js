describe('template spec', () => {
  it('passes', () => {
    cy.visit('/');
    cy.get('a').click();
    cy.get('a').click();
  })
})