module.exports = (container) => {
    //Services
    container.add('Mongoose', require('../services/Mongoose'), ['config/mongo']);
    container.add('ZeroKitService', require('../services/ZeroKitService'), ['config/zeroKit']);
    container.add('UserService', require('../services/UserService'), ['User']);
    container.add('RoomService', require('../services/RoomService'), ['Room']);
    container.add('MessageService', require('../services/MessageService'), ['Message']);
    container.add('FormService', require('../services/FormService'), []);
    container.add('AuthService', require('../services/AuthService'), []);

    // Models
    container.add('User', require('../models/User'), ['Mongoose']);
    container.add('Room', require('../models/Room'), ['Mongoose']);
    container.add('Message', require('../models/Message'), ['Mongoose']);

}