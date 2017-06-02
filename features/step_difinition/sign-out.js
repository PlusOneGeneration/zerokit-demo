const {defineSupportCode} = require('cucumber');

defineSupportCode(function ({Given, When, Then}) {

    When('I see login as {stringInDoubleQuotes}', function (stringInDoubleQuotes) {
        return this.tester.iSee(`p:contains('Signed in as ${stringInDoubleQuotes}')`)
    });

});
