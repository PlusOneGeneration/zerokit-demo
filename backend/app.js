const express = require('express');
const app = express();
const bodyParser = require('body-parser');

require('plus.application')
    .create({
        dir: __dirname + '/config',
        env: process.env.NODE_ENV || 'dev'
    })
    .wrap(app);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

app.use((err, req, res, next) => {
    console.log('[ERROR] ', err);
    res.status(500).send();
});

app.listen(app.config.get('port'), () => console.log('application started on port ' + app.config.get('port')));