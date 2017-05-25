const _ = require('lodash');

module.exports = class UserService {

    constructor(User) {
        this.User = User;
    }

    create(data) {
        let user = new this.User({
            email: data.email,
            zkitId: data.UserId,
            registrationData: {
                sessionId: data.RegSessionId,
                sessionVerifier: data.RegSessionVerifier
            },
            state: 0
        })

        return user.save();
    }

    update(user, data) {
        _.assign(user, data);
        return user.save();
    }

    getByEmail(email) {
        return this.User.findOne({email: email});
    }

    getByZeroKitId(zeroKitId) {
        return this.User.findOne({zkitId: zeroKitId});
    }

    getByQuery(query) {
        return this.User.findOne(query);
    }


}