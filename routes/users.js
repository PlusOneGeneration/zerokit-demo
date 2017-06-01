module.exports = (app) => {
    const express = require('express');
    const router = express.Router();

    const UserService = app.container.get('UserService');

    router.param('userId', (req, res, next, userId) => {
        UserService.getById(userId)
            .then(
                (user) => {
                    if (!user) {
                        return res.status(404).json();
                    }

                    req.User = user;
                    next();
                },
                (err) => next(err)
            );

    });
    //TODO @@@dr add auth validation
    router.get('/me', (req, res, next) => {
        if(!req.session.passport || Object.keys(req.session.passport).length == 0){
            return res.status(401).json();
        }

        res.json(req.session.passport.user);
    });

    router.get('/', (req, res, next) => {
        UserService.getByQuery({state: 1})
            .then((users) => res.json(users));
    });

    router.get('/:userId', (req, res, next) => {
        res.json(req.User);
    });

    return router;
}