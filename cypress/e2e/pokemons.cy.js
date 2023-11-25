describe('Автотест на покупку нового фото для своего тренера', function () {
    
    it('Тест на покупку аватарки', function () {
        cy.visit('https://pokemonbattle.me/');
        cy.get(':nth-child(1) > .auth__input').type('nevsespyat@yandex.ru');
        cy.get('#password').type('TKTnbF8GLsP5EXe');
        cy.get('.auth__button').click();
        cy.get('.header__btns > [href="/shop"]').click();
        
        cy.get(':nth-child(6) > .shop__button').click();
        cy.get('.pay__payform-v2 > :nth-child(2) > .pay_base-input-v2').type('4111 1111 1111 1111');
        cy.get(':nth-child(1) > .pay_base-input-v2').type('1224');
        cy.get('.pay-inputs-box > :nth-child(2) > .pay_base-input-v2').type('125');
        cy.get('.pay__input-box-last-of > .pay_base-input-v2').type('Meow Meowkins');
        cy.get('.pay-btn').click();
        cy.get('#cardnumber').type('56456');
        cy.get('.payment__submit-button').click();
        cy.get('.payment__success1').contains('Покупка прошла успешно');
        cy.get('.payment__adv').click();
        cy.get('.shop__list > :nth-child(6)').should('have.class', 'feature-empty'); //проверяю что купленный аватар "заблокирован" (не доступен к повторной покупке)
        
           })


})
