module.exports = (app) => {
    const express = require('express');
    const router = express.Router();
    const form = require('express-form');

    const RoomService = app.container.get('RoomService');

    const roomForm = form(
        form.field('user').trim().required()
    );

    //TODO @@@dr move it to FormService
    const validate = ((req, res, next) => {
        if (!req.form.isValid) {
            return res.status(400).send(req.form.getErrors());
        }

        return next();
    });

    router.param('roomId', (id, req, res, next) => {
        RoomService.getRoomById(id)
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

    router.post('/', roomForm, validate, (req, res, next) => {
        RoomService.createRoom([req.user._id, req.form.user])
            .then((room) => {
                console.log("ROOM", room);
                res.json(room);
            }, (err) => next(err));
    });

    router.use('/:roomId/messages', require('rooms-messages')(app));

    return router;
}