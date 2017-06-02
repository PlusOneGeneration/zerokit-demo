const {defineSupportCode} = require('cucumber');

defineSupportCode(function ({Given, When, Then}) {
    When('I see sign in page', function () {
        return this.tester.iSee(`h2:contains('Sign in')`)
    });

    Then('I type email {stringInDoubleQuotes}', function (stringInDoubleQuotes) {
        return this.tester.iType(`input#inputEmail`, stringInDoubleQuotes);
    });

    Then('I type password {stringInDoubleQuotes}', function(stringInDoubleQuotes) {
        const {By} = require('selenium-webdriver');

        return Promise.resolve()
            .then(() => this.tester.getDriver())
            .then((driver) => {
                return Promise.resolve()
                    .then(() => this.tester.iUseFrame('iframe'))
                    .then(() => driver.findElement(By.css(`input#pw1`)))
                    .then((input) => input.sendKeys(stringInDoubleQuotes))
                    .then(() => this.tester.iDontUseFrame())
            });
    });
});
