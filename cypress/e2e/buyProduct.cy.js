import Login from '../pages/loginPage'
import Product from '../pages/productPage'


describe("QA Automation Tech Test Suit", ()=> {


    // make objects of pages
    const loginObj = new Login()
    const productObj = new Product()

    // used before all hooks in case there are multiple cases in future
    before('launch app',()=>{
        
        // login to the app
        loginObj.loginToApp("standard_user","secret_sauce")
    })

    it("Purchase product", ()=>{
        
        // validate i am logged in and i am on the products page
        cy.url().should("include", "inventory.html")
        cy.get(".title").should("have.text", "Products")

        // i am purchasing "Sauce Labs Bolt T-Shirt"
        const shirtName = "Sauce Labs Bolt T-Shirt"
        productObj.selectTShirt(shirtName).should("have.text", shirtName).click()

        // add product to cart
        productObj.addToCart()

        // go to cart
        productObj.goToCart()

        // validate whether our product is in the cart 
        productObj.selectTShirt(shirtName).should("exist")

        // go to checkout & enter necessary info
        productObj.goToCheckout()
        productObj.enterUserInfo()
        productObj.continueBtn()

        // Order the Product
        productObj.finishBtn()

        // validate whether we ordered the product or not
        cy.get('h2.complete-header').should('have.text', 'Thank you for your order!');

    })


})