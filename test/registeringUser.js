const { Builder, By, Key, until } = require('selenium-webdriver');
const { expect } = require('chai');
//Chai assertions
const should = require('chai').should();
//Drivers
require('chromedriver');
require('geckodriver');


//describe block
describe("Registering a User", function () {

    let driver
    
    let fName = "Tim";
    let lName = "Tester";
    let email = "timtester@outlook.com";
    let password = "TestPass123";


    //Launching Browser and Opening Webpage
    this.beforeEach(async function (){
        driver = await new Builder().forBrowser('chrome').build();
        await driver.get('https://automationexercise.com/');
    });
    //Closing Browser
    this.afterEach(async function (){
        await driver.quit();
    });
    
    //Test
    it("Should Navigate to url 'http://automationexercise.com'", async function () {
        let title = await driver.getTitle();
        title.should.equal('Automation Exercise');
    });

    it("Should Navigate to New User Signup Page", async function(){
        await driver.findElement(By.css('a[href="/login"]')).click();
        let heading = await driver.findElement(By.css('#form > div > div > div:nth-child(3) > div > h2')).getText();
        expect(heading).to.include('New User Signup!');
    });

    it("Should fill in the name and email", async function(){
        await driver.findElement(By.css('a[href="/login"]')).click();
        const signupName = await driver.findElement(By.css('input[data-qa="signup-name"'));
        const signupEmail = await driver.findElement(By.css('input[data-qa="signup-email"'));
        await signupName.sendKeys(fName);
        await signupEmail.sendKeys(email);
        const actualName = await signupName.getAttribute('value');
        const expectedName = fName;
        const actualEmail = await signupEmail.getAttribute('value');
        const expectedEmail = email;
        expect(actualName).to.equal(expectedName);
        expect(actualEmail).to.equal(expectedEmail);
    });
})
