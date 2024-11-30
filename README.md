## Project Setup

1) Download & install NodeJS

2) Download & install visual studio code (VSCode)

3) Create a new folder for project & open it in VSCode

4) To create package.json file run this command `npm -i init`

5) Install cypress `npm install cypress -- save --dev`

6) Start cypress:  `npx cypress open`    (or)   `node_modules/.bin/cypress open`


## How to run Tests:


**Headed mode :** 
* To run cypress in UI enter command `npx cypress open`
* By giving this npx cypress run --headed. Will execute all the test cases and will show it on the UI. 

**Headless mode :** 
* To run specific test case in headless mode meaning on terminal & without UI ...
* Give this command `npx cypress run --spec "relative path of test file"`
* e.g. `npx cypress run --spec "cypress\e2e\buyProduct.cy.js`


* To run all test cases Then run this command `npx cypress run`. 
* It will run all the test case and will show the results on terminal

## TODO: Automation of things

* Automate whether filters are working fine on product page
* Remove products from cart & then validate whether they are removed from cart or not
* Add multiple products to the cart and then validate specific product whether it is added to cart or not.
* Logout from the app
* "Reset the App" functionality to validate its working

## Test Report:
* I have included the test report as well for an overview
* `cypress\reports\html\index.html`
