let {WebTester} = require('plus.tester');
module.exports = class Tester extends WebTester {
    constructor(driverFactory) {
        super(driverFactory);
    }
};
