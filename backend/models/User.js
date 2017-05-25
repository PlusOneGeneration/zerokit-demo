const _ = require('lodash');

module.exports = class User {
    constructor(params) {
        this.id = null;
        this.name = null;
        this.email = null;
        this.zeroKitUserId = null;
        this.registrationData = null;
        this.validationVerifier = null;
        this.regSessionId = null;

        this.setup(params);
    }

    setup(params) {
        params = params || {};

        _.merge(this, _.pick(params, [
            'id',
            'email',
            'name',
            'zeroKitUserId',
            'registrationData',
            'validationVerifier',
            'regSessionId',
        ]));

        return this;
    }
}