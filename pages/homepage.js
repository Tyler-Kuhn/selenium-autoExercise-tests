const { Builder, By } = require('selenium-webdriver');
class HomePage {
    constructor(driver) {
        this.driver = driver;
    }

    async navigateToLoginPage() {
        await this.driver.findElement(By.css('a[href="/login"]')).click();
        return new SignupPage(this.driver); // Returns the next page object
    }
}

module.exports = HomePage;