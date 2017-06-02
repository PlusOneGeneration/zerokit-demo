const {defineSupportCode} = require('cucumber');

defineSupportCode(function ({Given, When, Then}) {
    
    Given('User list with {stringInDoubleQuotes}', function (stringInDoubleQuotes) {
        return this.tester.iSee(`a:contains('${stringInDoubleQuotes}')`);
    });

    When('I select {stringInDoubleQuotes} for chat', function (stringInDoubleQuotes) {
        return this.tester.iClick(`a:contains('${stringInDoubleQuotes}')`);
    });

    Given('User {stringInDoubleQuotes} selected', function (stringInDoubleQuotes) {
        return this.tester.iSee(`a.active:contains('${stringInDoubleQuotes}')`);
    });

    Then('I see input for chat', function () {
        return this.tester.iSee('input');
    });

    Then('I write message {stringInDoubleQuotes}', function(stringInDoubleQuotes) {
            return this.tester.iType('input', stringInDoubleQuotes);
    });

    Given('My message {stringInDoubleQuotes} in chat', function(stringInDoubleQuotes) {
        return this.tester.iSee(`div span.label:contains('me')`)
            .then(() => this.tester.iSee(`div span:contains('${stringInDoubleQuotes}')`));
    });

    Then('I see message {stringInDoubleQuotes}', function(stringInDoubleQuotes) {
            return this.tester.iSee(`div span:contains('${stringInDoubleQuotes}')`);
    });
});
