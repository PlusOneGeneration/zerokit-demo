module.exports = (mongoose) => {
    const Schema = mongoose.Schema;

    const roomSchema = new Schema({
        messages: {type: Schema.Types.ObjectId, ref: 'Message'},
        users: [{type: Schema.Types.ObjectId, ref: 'User'}]
    });

    return mongoose.model('Room', roomSchema);
}