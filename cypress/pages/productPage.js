class Product
{

    selectTShirt(shirtName)
    {
        return cy.xpath(`//div[normalize-space()="${shirtName}"]`)
        // here i have parameterized the xpath for dynamic behavior.
    }

    addToCart()
    {
        cy.get("#add-to-cart").click()
    }

    goToCart()
    {
        cy.get(".shopping_cart_badge").click()
    }

    goToCheckout()
    {
        cy.get("#checkout").click()
    }

    enterUserInfo(firstName,lastName,postalcode)
    {
        cy.get("#first-name").type(firstName)
        cy.get("#last-name").type(lastName)
        cy.get("#postal-code").type(postalcode)      
    }

    continueBtn()
    {
        cy.get("#continue").click()
    }

    finishBtn()
    {
        cy.get("#finish").click()
    }
}

export default Product