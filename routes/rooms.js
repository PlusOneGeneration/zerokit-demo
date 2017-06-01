module.exports = (app) => {
    const express = require('express');
    const router = express.Router();
    const form = require('express-form');

    const RoomService = app.container.get('RoomService');
    const FormService = app.container.get('FormService');

    const roomForm = FormService.create(
        FormService.field('user').trim().required()
    );

    router.param('roomId', (req, res, next, roomId) => {
        RoomService.getRoomById(roomId)
            .then(
                (room) => {
                    if (!room) {
                        return res.status(404).send();
                    }

                    req.Room = room;
                    next();
                },
                (err) => next(err)
            );
    });

    router.get('/users/:userId', (req, res, next) => {
        const users = [req.user._id, req.params.userId];
        console.log('users', users);

        RoomService.getRoomByUsers(users)
            .then((room) => {
                if (!room) {
                    return res.status(404).json({errorMessage: 'Room not found'});
                }

                res.json(room);
            });
    });

    router.post('/', roomForm, (req, res, next) => {
        RoomService.createRoom([req.user._id, req.form.user])
            .then((room) => {
                res.json(room);
            }, (err) => next(err));
    });

    router.use('/:roomId/messages', require('./rooms-messages')(app));

    return router;
}