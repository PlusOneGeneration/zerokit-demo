module.exports = (app) => {
    const express = require('express');
    const router = express.Router();

    const UserService = app.container.get('UserService');

    // router.param('paramId', (id, req, res, next) => {
    //
    // });

    router.get('/me', (req, res, next) => {
        res.json(req.session.user);
    });

    return router;
}