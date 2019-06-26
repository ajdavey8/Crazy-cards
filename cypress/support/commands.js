Cypress.Commands.add('fillInForm', userInfo => {
  cy.get('input[name=title]')
    .eq(userInfo.title)
    .check({ force: true });
  cy.get('input[name=firstName]').type(userInfo.firstName);
  cy.get('input[name=lastName]').type(userInfo.lastName);
  cy.get('input[name=day]').type(userInfo.day);
  cy.get('input[name=month]').type(userInfo.month);
  cy.get('input[name=year]').type(userInfo.year);
  cy.get('input[name=annualIncome]').type(userInfo.annualIncome);
  cy.get('input[name=employmentStatus]')
    .eq(userInfo.employmentStatus)
    .check({ force: true });
  cy.get('input[name=postcode]').type(userInfo.postcode);
  cy.get('.search-form__button').click();
});
