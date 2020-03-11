require('dotenv').config();
var mongoose = require('mongoose');

try {
    mongoose.connect(process.env.URLMONGO, { useNewUrlParser: true, useUnifiedTopology: true });
} catch (e) {
    mongoose.connect('mongodb://localhost:27017/myapp', { useNewUrlParser: true });
}

module.exports = mongoose;