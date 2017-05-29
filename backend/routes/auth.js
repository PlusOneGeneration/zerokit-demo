module.exports = (app) => {
    const express = require('express');
    const router = express.Router();
    const passport = require('passport');
    const Strategy = require('passport-openidconnect').Strategy;
    const UserService = app.container.get('UserService');

    passport.use(new Strategy(
        app.config.get('openIdPassport'),
        (token, tokenSecret, profile, cb) => {
            UserService.getByZeroKitId(profile.id)
                .then((user) => cb(null, user))
                .catch(err => cb(err));
        }));


    passport.serializeUser(function (user, done) {
        done(null, user);
    });

    passport.deserializeUser(function (obj, done) {
        done(null, obj);
    });

    router.get('/login', passport.authenticate('openidconnect'));

    router.get('/callback',
        passport.authenticate('openidconnect', {failureRedirect: '/auth/sign-in'}),
        ((req, res, next) => res.json())
    );


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