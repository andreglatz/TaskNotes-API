require('dotenv').config();
var mongoose = require('mongoose');

mongoose.connect(process.env.URLMONGO, { useNewUrlParser: true, useUnifiedTopology: true }).catch((e) => {
    mongoose.connect('mongodb://localhost:27017/tasknotes', { useNewUrlParser: true, useUnifiedTopology: true }).catch((e) => {
        console.log(e);
    });
});




module.exports = mongoose;