module.exports = (app) => {
    const express = require('express');
    const router = express.Router();

    router.use('/zerokit', require('./zerokit')(app));
    router.use('/auth', require('./auth')(app));
    router.use('/users', require('./users')(app));

    return router;
}