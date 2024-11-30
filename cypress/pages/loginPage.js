class login

{
    visitApp()
    {
        cy.visit("https://www.saucedemo.com")
    }

    enterUsername(username)
    {
        cy.get("#user-name").click().type(username)
    }

    enterPassword(password)
    {
        cy.get("#password").type(password)
    }

    loginBtn()
    {
        return cy.get("#login-button")
    }
}

export default login