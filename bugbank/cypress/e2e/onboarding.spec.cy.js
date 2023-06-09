describe('Registering Two Users with success ', () => {
    
  it('Registering user one', () => {

    cy.fixture('userOne.json').then((userOne)=>{
      cy.register(userOne.email, userOne.name, userOne.password, userOne.passwordConf)
    })  
              
  })

  it('Registering user Two', () => {

    cy.fixture('userTwo.json').then((userTwo)=>{
      cy.register(userTwo.email, userTwo.name, userTwo.password, userTwo.passwordConf)
    })  
             
  })

})


