module.exports = (app) => {
    const express = require('express');
    const router = express.Router();
    const form = require('express-form');

    const UserService = app.container.get('UserService');
    const ZeroKitService = app.container.get('ZeroKitService');
    const FormService = app.container.get('FormService');
    const AuthService = app.container.get('AuthService');

    const createTresorForm = FormService.create(
        FormService.field('tresorId').trim().required()
    );

    const approveShareForm = FormService.create(
        FormService.field('operationId').trim().required()
    );

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
                zeroKitInitInfo.email = email;

                return UserService.create(zeroKitInitInfo);
            })
            .then((user) => res.json(user))
            .catch((err) => next(err));
    });

    router.post('/finish-user-registration', (req, res, next) => {
        const userId = req.body.userId;
        const userVerifier = req.body.validationVerifier;

        return UserService.getOneByQuery({zkitId: userId})
            .then((user) => {
                if (!user) {
                    return res.status(404).json({errorMessage: 'User not found'});
                }

                user.registrationData.validationVerifier = userVerifier;
                user.state = 1;

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

    router.get('/get-user-id', (req, res, next) => {
        return UserService.getByEmail(req.query.userName)
            .then(
                (user) => {
                    if (!user) {
                        return res.status(404).send();
                    }

                    res.json({zkitUserId: user.zkitId});
                },
                (err) => next(err)
            );
    });

    router.post('/tresor', AuthService.isAuthorized(), createTresorForm, (req, res, next) => {
        return ZeroKitService.createTresor(req.form.tresorId)
            .then(() => res.json());
    });

    router.post('/tresor/invite/approve', AuthService.isAuthorized(), approveShareForm, (req, res, next) => {
        return ZeroKitService.approveInviteToTresor(req.form.operationId)
            .then(
                () => res.json(),
                (err) => next(err)
            );
    });

    return router;
}