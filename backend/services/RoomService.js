module.exports = class RoomService {
    constructor(Room) {
        this.Room = Room;
    }

    createRoom(users) {
        const room = new this.Room({users: users});
        return room.save();
    }

    getRoomById(id) {
        return this.Room.findById(id);
    }

    getRoomByUsers(users) {
        return this.Room.findOne({
            users: {$all: users}
        });
    }
}
