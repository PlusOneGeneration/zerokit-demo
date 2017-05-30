module.exports = (app) => {
    const express = require('express');
    const router = express.Router();
    const form = require('express-form');

    const RoomService = app.container.get('RoomService');
    const MessageService = app.container.get('MessageService');

    // router.param('paramId', (id, req, res, next) => {
    //
    // });

    //TODO @@@dr move it to FormService
    const validate = ((req, res, next) => {
        if (!req.form.isValid) {
            return res.status(400).send(req.form.getErrors());
        }

        return next();
    });

    const messageForm = form(
        form.field('text').trim().required(),
        // form.field('fromUser').trim().required(),
        form.field('toUser').trim().required()
    );

    router.get('/', (req, res, next) => {
        MessageService.getMessagesByRoom(req.Room)
            .then(
                (messages) => res.json(messages),
                (err) => next(err)
            );
    });

    router.post('/', messageForm, validate, (req, res, next) => {
        MessageService.createMessage(req.Room, req.user, req.form)
            .then(
                (message) => res.json(message),
                (err) => next(err)
            );
    });

    return router;
}