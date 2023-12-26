const { Builder, By } = require('selenium-webdriver');
class SignupPage {
    constructor(driver) {
        this.driver = driver;
        this.heading = driver.findElement(By.css('#form > div > div > div:nth-child(3) > div > h2'));
        this.signupName = driver.findElement(By.css('input[data-qa="signup-name"'));
        this.signupEmail = driver.findElement(By.css('input[data-qa="signup-email"'));
    }

    async getHeadingText() {
        return await this.heading.getText();
    }

    async enterSignupName(name) {
        this.signupName.sendKeys(name);
    }

    async enterSignupEmail(email){
        this.enterSignupEmail.sendKeys(email);
    }

    // Additional methods to interact with the signup page can be added here
}
module.exports = SignupPage;