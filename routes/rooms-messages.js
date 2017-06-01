module.exports = (app) => {
    const express = require('express');
    const router = express.Router();
    const form = require('express-form');

    const RoomService = app.container.get('RoomService');
    const MessageService = app.container.get('MessageService');
    const FormService = app.container.get('FormService');

    const messageForm = FormService.create(
        FormService.field('text').trim().required(),
        FormService.field('toUser').trim().required()
    );

    router.get('/', (req, res, next) => {
        MessageService.getMessagesByRoom(req.Room)
            .then(
                (messages) => res.json(messages),
                (err) => next(err)
            );
    });

    router.post('/', messageForm, (req, res, next) => {
        MessageService.createMessage(req.Room, req.user, req.form)
            .then(
                (message) => res.json(message),
                (err) => next(err)
            );
    });

    return router;
}