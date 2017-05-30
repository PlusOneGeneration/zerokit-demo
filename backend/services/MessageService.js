const _ = require('lodash');

module.exports = class MessageService {
    constructor(Message) {
        this.Message = Message;
    }

    createMessage(room, user, data) {
        const message = new this.Message({
            room: room._id,
            fromUser: user._id
        });

        _.assign(message, data);

        return message.save();
    }

    getMessagesByRoom(room) {
        return this.Message
            .findOne({room: room._id})
            .populate('user')
            .populate('room')
            .exec();
    }
}
