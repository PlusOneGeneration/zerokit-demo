module.exports = (app) => {
    const express = require('express');
    const router = express.Router();

    const UserService = app.container.get('UserService');

    router.param('userId', (id, req, res, next) => {
        // UserService.
        next();

    });
    //TODO @@@dr add auth validation
    router.get('/me', (req, res, next) => {
        res.json(req.session.passport.user);
    });

    router.get('/', (req, res, next) => {
        UserService.getByQuery({state: 1})
            .then((users) => res.json(users));
    });

    return router;
}