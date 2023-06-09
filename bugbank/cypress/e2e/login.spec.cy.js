describe('Login Functional Tests', () => {
  
  before(() => {
    cy.fixture('userOne.json').then((userOne)=>{
      cy.register(userOne.email, userOne.name, userOne.password, userOne.passwordConf)
    })

    cy.fixture('userTwo.json').then((userTwo)=>{
      cy.register(userTwo.email, userTwo.name, userTwo.password, userTwo.passwordConf)
    })

  })

  it('logging User One with success', () => {       
    cy.fixture('userOne.json').then((userOne)=>{
      cy.restoreLocalStorage()
      cy.login(userOne.email, userOne.password) 
      cy.get('#textBalance > span').invoke('text').then((amount) => {
        amount = amount.toString()
        cy.log(amount)
        cy.writeFile('cypress/fixtures/initialBalanceAccOne.json', { balance: amount })
        
      })
    })
  })

  it('logging User Two with success', () => {    
    cy.fixture('userTwo.json').then((userTwo)=>{
      cy.restoreLocalStorage()
      cy.login(userTwo.email, userTwo.password) 
      cy.get('#textBalance > span').invoke('text').then((amount) => {
        amount = amount.toString()
        cy.log(amount)
        cy.writeFile('cypress/fixtures/initialBalanceAccTwo.json', { balance: amount })        
      })
    })    
  })

  it('unsuccessful login', () => {
    cy.visit('/')
    cy.get('.card__login input[name="email"]').type('teste@mail.com', { force: true })
    cy.get('.card__login input[name="password"]').type('12346', { force: true })
    cy.get('.login__buttons button[type="submit"]').click()
    cy.get('#modalText').should('be.visible')
          
  })

  it('email wrong format', () => {
    cy.visit('/')
    cy.get('.card__login input[name="email"]').type('teste', { force: true })
    cy.get('.kOeYBn > .input__warging').should('be.visible')
   
  })

  it('no password', () => {
    cy.visit('/')
    cy.get('.card__login input[name="email"]').type('teste@mail.com', { force: true })
    cy.get('.login__buttons button[type="submit"]').click()
    cy.get('.kOeYBn > .input__warging').should('be.visible')
   
  })
  



})


