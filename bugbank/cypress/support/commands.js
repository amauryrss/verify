Cypress.Commands.add("register", (email, name, password, passwordConf) => { 
      cy.visit('/')
      var txt2 = '0'
      var conta = '0'
      var digito = '0'
      cy.get('.ihdmxA').click()
      cy.get('.card__register input[name="email"]').type(email, { force: true })
      cy.get('.card__register input[name="name"]').type(name, { force: true })
      cy.get('.card__register input[name="password"]').type(password, { force: true })
      cy.get('.card__register input[name="passwordConfirmation"]').type(passwordConf, { force: true })
      cy.get('#toggleAddBalance').click({ force: true })
      cy.get('.card__register button[type="submit"]').click({ force: true })
      cy.get('#modalText').invoke('text').then((txt) => {
            txt2 = txt.toString()
            conta = txt2.substring(8, 11).replace(/-/g, "")
            digito = txt2.substring(11, 13).trim().replace(/-/g, "")
            cy.log('Conta: ' + conta + ' digito ' + digito)
            cy.writeFile('cypress/fixtures/accountTwo.json', { accountTwo: conta, digitTwo: digito })
            cy.get("#btnCloseModal").click() 
             
      })
      cy.saveLocalStorage()    
}),

Cypress.Commands.add("login", (email, password,) => { 
      cy.visit('/')
      cy.restoreLocalStorage()
      cy.get('.card__login input[name="email"]').type(email, { force: true })
      cy.get('.card__login input[name="password"]').type(password, { force: true })
      cy.get('.login__buttons button[type="submit"]').click()
      cy.get('#textName', { timeout: 100 }).should('be.visible') 
        
}),

Cypress.Commands.add("moneyTransfer", (account, digit, amount, description) => { 
      cy.get('#btn-TRANSFERÊNCIA').click({ force: true })
      cy.get('.account__data input[type="accountNumber"]').type(account, { force: true })
      cy.get('.account__data input[type="digit"]').type(digit, { force: true })
      cy.get('.style__ContainerFieldInput-sc-s3e9ea-0 input[type="transferValue"]').type(amount, { force: true })
      cy.get('.style__ContainerFieldInput-sc-s3e9ea-0 input[type="description"]').type(description, { force: true })
      cy.get('.style__ContainerButton-sc-1wsixal-0').click()
      cy.get('#btnCloseModal').click()
    
})