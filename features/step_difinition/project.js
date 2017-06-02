const {defineSupportCode} = require('cucumber');

defineSupportCode(function ({Given, When, Then}) {
    Given('I open home page', function () {
        return this.tester.iOpen('http://localhost:3000');
    });

    Given('I open fresh project', function () {
        return this.tester.iOpen('http://localhost:3000/test/project/refresh')
            .then(() => this.tester.iSee('h1:contains(OK)'));
    });

    Given('I see main app page', function () {
        return this.tester.iSee(`h3:contains('Users')`)
    });

});
