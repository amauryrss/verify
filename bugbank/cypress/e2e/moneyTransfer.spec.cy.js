describe('Money transfer', () => {
  
  before(() => {
    cy.fixture('userOne.json').then((userOne)=>{
      cy.register(userOne.email, userOne.name, userOne.password, userOne.passwordConf)
    })

    cy.fixture('userTwo.json').then((userTwo)=>{
      cy.register(userTwo.email, userTwo.name, userTwo.password, userTwo.passwordConf)
    })

    cy.fixture('userOne').then((userOne)=>{
      cy.login(userOne.email, userOne.password)
    })
    
  })
  
  it('money transfer with success', () => {  

    cy.fixture('accountTwo').then((accountTwo)=>{
      cy.moneyTransfer(accountTwo.accountTwo, accountTwo.digitTwo, '200', 'teste transf')
      cy.saveLocalStorage() 
    })
    
  })

  it('check accouns balance and print to console', () => {  

    cy.fixture('userOne').then((userOne)=>{
      cy.login(userOne.email, userOne.password)
      cy.get('#textBalance', { timeout: 2000 }).invoke('text').then((txt) => {
      cy.log(txt)
      })
    })

    cy.fixture('userTwo').then((userTwo)=>{
      cy.login(userTwo.email, userTwo.password)
      cy.get('#textBalance', { timeout: 2000 }).invoke('text').then((txt) => {
      txt = txt.toString()
      cy.log(txt)
      })
    })
    
  })


})
  
