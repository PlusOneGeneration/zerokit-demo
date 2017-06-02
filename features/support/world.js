const {defineSupportCode} = require('cucumber');

function CustomWorld() {
    const WebTester = require('../tester/Tester');
    const seleniumWebdriver = require('selenium-webdriver');

    this.tester = new WebTester(() => {
        let name = process.env.TEST_DRIVER || 'chrome';
        let driver = new seleniumWebdriver.Builder().forBrowser(name).build();
        driver.manage().timeouts().pageLoadTimeout(60 * 1000);
        return driver;
    });

    this.tester.setup({waitTimeout: 60 * 1000});
}

defineSupportCode(({setWorldConstructor, setDefaultTimeout}) => {
    setDefaultTimeout(120 * 1000);
    setWorldConstructor(CustomWorld);
});