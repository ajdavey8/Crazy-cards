describe('Crazy Cards User cases', () => {
  it('Displays the correct cards for a full time worker on £34000 salary', () => {
    const userInfo = {
      title: 0,
      firstName: 'Ollie',
      lastName: 'Murphree',
      day: '01',
      month: '07',
      year: '1970',
      annualIncome: '34000',
      employmentStatus: 0,
      postcode: 'BS14 9PR'
    };
    cy.visit('/');
    cy.fillInForm(userInfo);
    cy.get('.card').should('have.length', 2);
    cy.get('.card__heading')
      .eq(0)
      .should('contain', 'Anywhere Card');
    cy.get('.card__heading')
      .eq(1)
      .should('contain', 'Liquid Card');
  });

  it('Displays the correct cards for a student on £17000 salary', () => {
    const userInfo = {
      title: 3,
      firstName: 'Elizabeth',
      lastName: 'Edmundson',
      day: '29',
      month: '04',
      year: '1984',
      annualIncome: '17000',
      employmentStatus: 2,
      postcode: 'PH12 8UW'
    };
    cy.visit('/');
    cy.fillInForm(userInfo);
    cy.get('.card').should('have.length', 3);
    cy.get('.card__heading')
      .eq(0)
      .should('contain', 'Anywhere Card');
    cy.get('.card__heading')
      .eq(1)
      .should('contain', 'Student Life');
    cy.get('.card__heading')
      .eq(2)
      .should('contain', 'Liquid Card');
  });

  it('Displays the correct cards for a part time worker on £14000 salary', () => {
    const userInfo = {
      title: 0,
      firstName: 'Trevor',
      lastName: 'Rick',
      day: '07',
      month: '09',
      year: '1990',
      annualIncome: '14000',
      employmentStatus: 1,
      postcode: 'TS25 2NF'
    };
    cy.visit('/');
    cy.fillInForm(userInfo);
    cy.get('.card').should('have.length', 1);
    cy.get('.card__heading').should('contain', 'Anywhere Card');
  });
});
