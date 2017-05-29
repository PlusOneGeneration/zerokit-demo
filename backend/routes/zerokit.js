module.exports = (app) => {
    const express = require('express');
    const router = express.Router();

    const UserService = app.container.get('UserService');
    const ZeroKitService = app.container.get('ZeroKitService');

    router.post('/init-user-registration', (req, res, next) => {
        let email = req.body.email;

        UserService.getByEmail(email)
            .then((user) => {
                if (user) {
                    return res.status(400).json({errorMessage: 'Email already registered'});
                }
            })
            .then(() => ZeroKitService.initUserRegistration())
            .then((zeroKitInitInfo) => {
                let data = zeroKitInitInfo;
                data.email = email;

                return UserService.create(data);
            })
            .then((user) => res.json(user))
            .catch((err) => next(err));
    });

    router.post('/finish-user-registration', (req, res, next) => {
        const userId = req.body.userId;
        const userVerifier = req.body.validationVerifier;

        // return UserService.getByQuery({zkitId: userId, state: 0})
        return UserService.getOneByQuery({zkitId: userId})
            .then((user) => {
                if (!user) {
                    return res.status(404).json({errorMessage: 'User not found'});
                }

                user.registrationData.validationVerifier = userVerifier;
                // user.registrationData.validationCode = validationCode;
                user.state = 1;
                console.log('USER', user);

                return user.save()
                    .then(() => {
                       return ZeroKitService
                            .validateUser(
                                userId,
                                user.registrationData.sessionId,
                                user.registrationData.sessionVerifier,
                                userVerifier
                            )
                            .then(() => res.json());
                    })
            })
            .catch((err) => next(err));

    });

    router.post('/validate-user', (req, res, next) => {

    });

    router.get('/get-user-id', (req, res, next) => {
        // console.log('req.body.email', req.query.userName);
       return UserService.getByEmail(req.query.userName)
           .then((user) => {
           // console.log('user ', user);
                   res.json({zkitUserId: user.zkitId});
               },
               (err) => next(err));
    });
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