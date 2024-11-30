class Product
{

    selectTShirt(shirtName)
    {
        return cy.xpath(`//div[normalize-space()="${shirtName}"]`)
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

    enterUserInfo()
    {
        cy.get("#first-name").type("fazle")
        cy.get("#last-name").type("yazdan")
        cy.get("#postal-code").type("44000")      
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