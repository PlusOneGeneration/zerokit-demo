module.exports = (container) => {
    //Services
    container.add('Mongoose', require('../services/Mongoose'), ['config/mongo']);

    // Models
    container.add('User', require('../models/User'), []);

}