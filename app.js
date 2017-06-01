const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const session = require("express-session");
const cookieParser = require("cookie-parser");
const MongoStore = require('connect-mongo')(session);
const passport = require('passport');

require('plus.application')
    .create({
        dir: __dirname + '/config',
        env: process.env.NODE_ENV || 'dev'
    })
    .wrap(app);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());

app.use(session({
    secret: 'secret',
    store: new MongoStore({mongooseConnection: app.container.Mongoose.connection})
}));

app.use((req, res, next) => {
    console.log(req.method + ' ' + req.url);
    next();
});

app.use(passport.initialize());
app.use(passport.session());

app.use(require('./routes/router')(app));

app.use((err, req, res, next) => {
    console.log('[ERROR] ', err.message);
    console.log('[ERROR] ', err.stack);
    res.status(500).send();
});

app.listen(app.config.get('port'), () => console.log('application started on port ' + app.config.get('port')));