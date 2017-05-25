module.exports = (app) => {
    const express = require('express');
    const router = express.Router();

    router.use('/libs', require('./sdk')(app));
    router.use('/api', require('./api')(app));

    return router;
}