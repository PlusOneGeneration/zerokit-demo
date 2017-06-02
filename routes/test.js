module.exports = (app) => {
    const express = require('express');
    const router = express.Router();

    const User = app.container.get('User');

    let userFixtures = require('../features/fixtures/users.json');

    router.get('/project/refresh', (req, res, next) => {
        User.remove({})
            .then(() => {
                let promises = [];
                userFixtures.forEach((user) => promises.push(User.create(user)));

                return Promise.all(promises)
            })
            .then(() => {
                res.set('content-type', 'text/html');
                res.send(`<h1>OK<h1/>`);
            });
    });

    return router;
}