sessionStorage.setItem('Access', "CompleteAccess")

describe('Edit users end to end tests', () => {
  it('Verificar happy path (cambio de numero)', () => {
    const randomNumber = Math.floor(Math.random() * 100);

    /*cy.intercept('GET', 'https://ncv-api-staging.azurewebsites.net/api/auth/Sebas', {
      fixture: 'Users/testUser.json'
    }).as('getBasicInfo',);
    
    cy.intercept('PUT', 'https://ncv-api-staging.azurewebsites.net/api/auth/Sebas', {
      statusCode: 200,
      body: {
        "email": "testUser@gmail.com",
        "cellPhone": randomNumber,
        "firstName": "User",
        "lastName": "Test",
        "role": "Administrador",
        "rol": "Administrador"
      }
    }).as('updateUserInfo');*/

    cy.intercept('GET', 'https://ncv-api-staging.azurewebsites.net/api/auth', [
      {
        "email": "testUser@gmail.com",
        "firstName": "User",
        "lastName": "Test",
        "cellPhone": randomNumber,
        "nameRole": "Administrador",
        "id": "Sebas"
      }
    ]).as('getInfo',);
   /* cy.visit('/vista-usuarios/Sebas');
    cy.get('#cellPhone')
      .clear()
      .type(randomNumber)
    cy.get('button[type="input"][label="Guardar Cambios"]').click();*/
    cy.visit('/vista-usuarios')
    cy.get('.MuiListItemText-primary').contains('Administrador').click()
    cy.get('ul.MuiList-root')
      .contains(randomNumber)
      .should('be.visible');
  });
});

