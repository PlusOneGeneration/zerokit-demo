module.exports = (mongoose) => {
    const Schema = mongoose.Schema;

    const messageSchema = new Schema({
        text: String,
        fromUser: {type: Schema.Types.ObjectId, ref: 'User'},
        toUser: {type: Schema.Types.ObjectId, ref: 'User'},
        room: {type: Schema.Types.ObjectId, ref: 'Room'},
        tresorId: String,
        messageShared: {type: Boolean, default: false},
        date: {type: Date, delete: Date.now},
    });

    return mongoose.model('Message', messageSchema);
}