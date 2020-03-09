require('dotenv').config();
var mongoose = require('mongoose');

mongoose.connect(process.env.URLMONGO, { useNewUrlParser: true, useUnifiedTopology: true });

module.exports = mongoose;