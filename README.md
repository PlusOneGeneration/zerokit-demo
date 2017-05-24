#ZeroKit Demo App

##Dependencies
- VirtualBox
- vagrant
- mongoDB
- npm
- node v7.10.0

##Install

```git clone https://github.com/PlusOneGeneration/zerokit-demo.git```

Setup backend
```
cd zkit.app
npm install
```

Then open config.json and fill you zerokit credentials

Example:
```
{
  "dbUrl": "mongodb://user:pass@ds123456.mlab.com:49479/backend-sample",
  "baseUrl": "https://samplebackend.tresorit.io/",
  "appOrigins": ["https://samplefrontend.tresorit.io", "http://localhost:3002"],
  "zeroKit": {
    "serviceUrl": "https://tenant1234.tresorit.io",
    "adminUserId": "admin@tenant1234.tresorit.io",
    "adminKey": "1234asdf1234asdf1234asdf1234asdf1234asdf1234asdf1234asdf1234asdf",
    "sdkVersion": "4",
    "idp": [
      {
        "clientID": "tenant1234_client1234",
        "clientSecret": "asdf1234asdf1234"
      },
      {
        "clientID": "tenant1234_client4312",
        "clientSecret": "fdsa4321fdsa4321",
        "callbackURL": "https://tenant1234_client4312.tenant1234.tresorit.io"
      }
    ]
  }
}
```

Setup you box. Copy ```Vagrantfile.dist``` to ```Vagrantfile```.
```
vagrant up
vagrant ssh
cd project
```

Then start backend application from box:
```npm start```

After configure you backend, we need setup and configure client application.
 
Setup angular cli proxy. Open ```proxy.conf.json``` and set target url for you backend host. By default backend host ```http://192.168.10.20:3000```
 
Open new terminal from your system, without vagrant box. Make next steps:
```
cd client
npm install
npm run start.proxy
```

##Project overview
Zerokit Demo Application included next functional:
 - registration 
 - IDP login
 - create tresor
 - encrypt text
 - decrypt text
 - share tresor
 
##Screenshots
![Sign Up](https://github.com/PlusOneGeneration/zerokit-demo/blob/master/screenshots/sign-up.png "Sign Up")
![Sign in](https://github.com/PlusOneGeneration/zerokit-demo/blob/master/screenshots/sign-in.png "Sign in")
![Encrypt](https://github.com/PlusOneGeneration/zerokit-demo/blob/master/screenshots/encrypt.png "Encrypt")
![Decrypt](https://github.com/PlusOneGeneration/zerokit-demo/blob/master/screenshots/decrypt.png "Decrypt")
![Share tresor](https://github.com/PlusOneGeneration/zerokit-demo/blob/master/screenshots/share.png "Share tresor")




