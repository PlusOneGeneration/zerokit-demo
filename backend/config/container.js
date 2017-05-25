module.exports = (container) => {
    //Services
    container.add('Mongoose', require('../services/Mongoose'), ['config/mongo']);
    container.add('ZeroKitService', require('../services/ZeroKitService'), ['config/zeroKit']);
    container.add('UserService', require('../services/UserService'), ['User']);

    // Models
    container.add('User', require('../models/User'), ['Mongoose']);

}