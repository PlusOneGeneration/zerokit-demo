# ZeroKit Demo App

## Dependencies
- VirtualBox
- vagrant
- mongoDB
- npm
- node v7.10.0

## Install

```git clone https://github.com/PlusOneGeneration/zerokit-demo.git```

Setup backend
```
cd zkit.app
npm install
```

Then open config/default.js and fill you zerokit credentials, configure idb urls, backend port, database name

Example:
```
const idpBaseUrl = 'https://s7g8gjvuj7.api.tresorit.io/idp';

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
        authorizationURL: `${idpBaseUrl}/connect/authorize`,
        tokenURL: `${idpBaseUrl}/connect/token`,
        callbackURL:  `http://localhost:3000/api/auth/callback`,
        userInfoURL: `${idpBaseUrl}/connect/userInfo`,
        issuer: `${idpBaseUrl}`,
        prompt: "none",
        scope: "profile"
    },
}
```

Setup you box. Copy ```Vagrantfile.dist``` to ```Vagrantfile```.
```
vagrant up
vagrant ssh
cd project
```

Then start backend application from box:
```npm run start.backend```

After configure you backend, we need setup and configure client application.
 
Setup angular cli proxy. Open ```proxy.conf.json``` and set target url for you backend host. By default backend host ```http://192.168.10.20:3000```
 
Open new terminal from your system, without vagrant box. Make next steps:
```
cd client
npm install
npm run start.proxy
```

## Project overview
Zerokit Demo Secret Messenger Application included next functional:
 - registration 
 - IDP login
 - logout
 - select user for chat
 - storing encrypted messages
 
## Screenshots
![Sign Up](https://github.com/PlusOneGeneration/zerokit-demo/blob/master/screenshots/sign-up.png "Sign Up")
![Sign in](https://github.com/PlusOneGeneration/zerokit-demo/blob/master/screenshots/sign-in.png "Sign in")
![Encrypt](https://github.com/PlusOneGeneration/zerokit-demo/blob/master/screenshots/user-list.png "Users list")
![Decrypt](https://github.com/PlusOneGeneration/zerokit-demo/blob/master/screenshots/start-message.png "Start chat")
![Share tresor](https://github.com/PlusOneGeneration/zerokit-demo/blob/master/screenshots/message.png "Chat")




