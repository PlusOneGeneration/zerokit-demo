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

    router.get('/logout', (req, res, next) => {
        req.logOut();
        res.json();
    });

    return router;
}