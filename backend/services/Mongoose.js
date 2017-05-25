module.exports = (mongoConf) => {
    const mongoose = require('mongoose');

    mongoose.connect(mongoConf.url);

    return mongoose;
}
