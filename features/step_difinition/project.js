const {defineSupportCode} = require('cucumber');

defineSupportCode(function({Given, When, Then}) {
    Given('I open home page', function () {
        return this.tester.iOpen('http://localhost:3000');
    });

});
