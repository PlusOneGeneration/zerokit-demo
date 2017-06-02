const {defineSupportCode} = require('cucumber');

defineSupportCode(function({Given, When, Then}) {
    Then('Wait {int}', function (int) {
        return new Promise((resolve, reject) => setTimeout(resolve, int * 1000));
    });

    When('I click button {name}', function(name) {
        return this.tester.iClick(`button:contains(${name})`);
    });

    Given('{stringInDoubleQuotes} browser', function (stringInDoubleQuotes) {
        return this.tester.iUseBrowser(stringInDoubleQuotes);
    });
});
