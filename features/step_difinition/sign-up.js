const {defineSupportCode} = require('cucumber');

defineSupportCode(function ({Given, When, Then}) {
    Given('I see sign up page', function () {
        return this.tester.iSee(`h2:contains('Sign Up')`)
    });

    Then('I type and confirm password {stringInDoubleQuotes}', function (stringInDoubleQuotes) {
        const {By} = require('selenium-webdriver');

        return Promise.resolve()
            .then(() => this.tester.getDriver())
            .then((driver) => {
                return Promise.resolve()
                    .then(() => this.tester.iUseFrame('iframe'))
                    .then(() => driver.findElement(By.css(`input#pw1`)))
                    .then((input) => input.sendKeys(stringInDoubleQuotes))
                    .then(() => driver.findElement(By.css(`input#pw2`)))
                    .then((input) => input.sendKeys(stringInDoubleQuotes))
                    .then(() => this.tester.iDontUseFrame());
            });
    });
});
