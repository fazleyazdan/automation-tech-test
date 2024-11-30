class login

{

    loginToApp(username,password)
    {
        cy.visit("https://www.saucedemo.com")
        cy.get("#user-name").click().type(username)
        cy.get("#password").type(password)
        cy.get("#login-button").click()
    }

}

export default login