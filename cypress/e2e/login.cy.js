
describe('Проверка авторизации', function () {
    
    it('Верный логин, верный пароль', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#loginButton').should('be.disabled');
      cy.get('#mail').type('german@dolnikov.ru');
      cy.get('#loginButton').should('be.disabled');
      cy.get('#pass').type('iLoveqastudio1');
      cy.get('#loginButton').should('be.enabled');
      cy.get('#loginButton').click();
      cy.get('#message').should('be.visible');
      cy.get('#exitMessageButton > .exitIcon').should('be.visible');
      cy.get('#message').contains('Авторизация прошла успешно');
         })

         it('Проверка восстановления пароля', function () {
            cy.visit('https://login.qa.studio/');
            cy.get('#forgotEmailButton').should('be.enabled');
            cy.get('#forgotEmailButton').click();
            cy.get('#mailForgot').type('german@dolnikov.ru');
            cy.get('#restoreEmailButton').click();
            cy.get('#messageHeader').should('be.visible');
            cy.get('#exitMessageButton > .exitIcon').should('be.visible');
            cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail');
            
             })

         it('Верный логин, не верный пароль', function () {
            cy.visit('https://login.qa.studio/');
            cy.get('#loginButton').should('be.disabled');
          cy.get('#mail').type('german@dolnikov.ru');
          cy.get('#loginButton').should('be.disabled');
          cy.get('#pass').type('12iLoveqastudio1');
          cy.get('#loginButton').should('be.enabled');
          cy.get('#loginButton').click();
          cy.get('#message').should('be.visible');
          cy.get('#exitMessageButton > .exitIcon').should('be.visible');
          cy.get('#message').contains('Такого логина или пароля нет');
             })

             it('Не верный логин, верный пароль', function () {
                cy.visit('https://login.qa.studio/');
                cy.get('#loginButton').should('be.disabled');
              cy.get('#mail').type('germn@dolnikov.ru');
              cy.get('#loginButton').should('be.disabled');
              cy.get('#pass').type('iLoveqastudio1');
              cy.get('#loginButton').should('be.enabled');
              cy.get('#loginButton').click();
              cy.get('#message').should('be.visible');
              cy.get('#exitMessageButton > .exitIcon').should('be.visible');
              cy.get('#message').contains('Такого логина или пароля нет');
                 })

             it('Проверка валидации полей', function () {
                cy.visit('https://login.qa.studio/');
                cy.get('#loginButton').should('be.disabled');
              cy.get('#mail').type('germandolnikov.ru');
              cy.get('#loginButton').should('be.disabled');
              cy.get('#pass').type('iLoveqastudio1');
              cy.get('#loginButton').should('be.enabled');
              cy.get('#loginButton').click();
              cy.get('#message').should('be.visible');
              cy.get('#exitMessageButton > .exitIcon').should('be.visible');
              cy.get('#message').contains('Нужно исправить проблему валидации');
                 })


                 it('Проверка на приведение к строчным буквам в логине', function () {
                    cy.visit('https://login.qa.studio/');
                    cy.get('#loginButton').should('be.disabled');
                  cy.get('#mail').type('GerMan@Dolnikov.ru');
                  cy.get('#loginButton').should('be.disabled');
                  cy.get('#pass').type('iLoveqastudio1');
                  cy.get('#loginButton').should('be.enabled');
                  cy.get('#loginButton').click();
                  cy.get('#message').should('be.visible');
                  cy.get('#exitMessageButton > .exitIcon').should('be.visible');
                  cy.get('#message').contains('Нужно исправить проблему валидации');
                     })
   
})
