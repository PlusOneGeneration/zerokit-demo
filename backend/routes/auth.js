module.exports = (app) => {
    const express = require('express');
    const router = express.Router();
    const passport = require('passport');
    const Strategy = require('passport-openidconnect').Strategy;
    const UserService = app.container.get('UserService');

    passport.use(new Strategy(app.config.get('openIdPassport'),
        (token, tokenSecret, profile, cb) => {
            console.log('profile =>>', profile);
            return cb(null, profile)
        }));


    passport.serializeUser(function (user, done) {
        console.log('user', user);
        done(null, user);
    });

    passport.deserializeUser(function (obj, done) {
        // @@ make model instead of hash/object
        console.log('desiarileze', obj);
        done(null, obj);
    });
    //full url api/auth/login
    router.get('/login', passport.authenticate('openidconnect'));

    //full url api/auth/callback
    router.get('/callback',passport.authenticate('openidconnect', {successRedirect: '/auth/sign-up', failureRedirect: '/auth/sign-in'}));


    // router.get('/login', ((req, res, next) => {
    //    console.log('LOGIN params', req.params);
    //    console.log('LOGIN query', req.query);
    //    console.log('LOGIN body', req.body);
    //    next();
    // }), passport.authenticate('openidconnect'));
    //

    // router.get('/login', ((req, res, next) => {
    //     const clientId = req.query.clientId || req.session.clientID;
    //     if (!clientId) return res.json(errors.badInput("NoClientId"));
    //     // debugLog("got clientid");
    //     // debugLog("requested a redirect to: %s on success", req.query.reto);
    //     req.session.clientID = clientId;
    //     req.session.returnTo = req.query.reto;
    //
    //     console.log('clientId', clientId);
    //     // return passport.authenticate("openid-" + clientId)(req, res, next);
    //     return passport.authenticate('openidconnect')(req, res, next);
    // }));


    // router.get('/callback', ((req, res, next) => {
    //    console.log('Callback');
    //    next();
    // }),passport.authenticate('openidconnect', {successRedirect: '/auth/sign-up', failureRedirect: '/auth/sign-in'}));


    // router.get('/callback', passport.authenticate('openidconnect', {failureRedirect: '/#error'}),
    // router.get('/callback', passport.authenticate('openidconnect'),
    //     (req, res, next) => {
    //         console.log('callback ERROR');
    //         res.json();
    // }
    //     ,
    //     (req, res, next) => {
    //         console.log('callback SUCEES');
    //         res.json();
    //     });


    router.get('/me', (req, res, next) => {
        console.log('req', req.session);

        res.json(req.session);
    })
    // const SampleService = app.container.get('SampleService');

    // router.param('paramId', (id, req, res, next) => {
    //    
    // });

    // router.get('/', (req, res, next) => {
    //    
    // });
    //
    // router.post('/', (req, res, next) => {
    //
    // });
    //
    // router.put('/', (req, res, next) => {
    //
    // });
    //
    // router.delete('/', (req, res, next) => {
    //
    // });

    return router;
}