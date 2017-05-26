module.exports = (app) => {
    const express = require('express');
    const router = express.Router();

    // const SampleService = app.container.get('SampleService');

    router.use('/zerokit', require('./zerokit')(app));
    router.use('/auth', require('./auth')(app));

    return router;
}