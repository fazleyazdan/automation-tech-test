## Project Setup

1) Download & install nodejs

2) Download & install visual studio code (VSCode)

3) create a new folder for project & open in VSCode

4) open cmd/terminal then execute below command

npm -i init --> creates package.json file

5) Install cypress
npm install cypress -- save --dev

6) start cypress

`npx cypress open`       (or)
`node_modules/.bin/cypress open`

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
