const idpBaseUrl = 'https://s7g8gjvuj7.api.tresorit.io';

module.exports = {
    port: 3000,
    mongo: {
        url: 'mongodb://localhost/zero-kit'
    },
    zeroKit: {
        "serviceUrl": "https://s7g8gjvuj7.api.tresorit.io",
        "adminUserId": "admin@s7g8gjvuj7.tresorit.io",
        "adminKey": "22a9b060481733f41a2542c1220fd8ef53f0cfa020d8a02f775f0ef3932261bd",
        "sdkVersion": "4",
        "idp": [
            {
                "clientID": "s7g8gjvuj7_8XWEmNCNox",
                "clientSecret": "s7g8gjvuj7_dpnIwFp7i3qpUwIh"
            }
        ]
    },

    openIdPassport: {
        clientID: 's7g8gjvuj7_8XWEmNCNox',
        clientSecret: 's7g8gjvuj7_dpnIwFp7i3qpUwIh',
        // authorizationURL: zeroKitIDP + '/connect/authorize',
        // tokenURL: zeroKitIDP + '/connect/token',
        // callbackURL: appHost + '/auth/open-id-connect/callback',
        // userInfoURL: zeroKitIDP + '/connect/userInfo'
        authorizationURL: `${idpBaseUrl}/connect/authorize`,
        tokenURL: `${idpBaseUrl}/connect/token`,
        callbackURL:  `http://localhost:3000/api/auth/callback`,
        userInfoURL: `${idpBaseUrl}/connect/userInfo`,
        issuer: `${idpBaseUrl}`,
        prompt: "none",
        scope: "profile"
    },
}