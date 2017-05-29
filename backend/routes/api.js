module.exports = (app) => {
    const express = require('express');
    const router = express.Router();

    router.use('/zerokit', require('./zerokit')(app));
    router.use('/auth', require('./auth')(app));
    router.use('/users', require('./users')(app));
    router.use('/rooms', require('./rooms')(app));

    return router;
}