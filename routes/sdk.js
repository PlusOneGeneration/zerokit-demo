module.exports = (app) => {
    const express = require('express');
    const router = express.Router();

    router.get('/zkit-sdk.js', (req, res, next) => {
        return res.redirect(
            `${app.config.get('zeroKit.serviceUrl')}/static/v${app.config.get('zeroKit.sdkVersion')}/zkit-sdk.js`
        );
    });

    return router;
}