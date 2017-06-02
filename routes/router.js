module.exports = (app) => {
    const express = require('express');
    const router = express.Router();

    router.use('/libs', require('./libs')(app));
    router.use('/api', require('./api')(app));

    if(process.env.NODE_ENV == 'test') {
        router.use('/test', require('./test')(app));
    }

    return router;
}