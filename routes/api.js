module.exports = (app) => {
    const express = require('express');
    const router = express.Router();
    const AuthService = app.container.get('AuthService');

    router.use('/zerokit', require('./zerokit')(app));
    router.use('/auth', require('./auth')(app));
    router.use('/users', AuthService.isAuthorized(), require('./users')(app));
    router.use('/rooms', AuthService.isAuthorized(), require('./rooms')(app));

    return router;
}