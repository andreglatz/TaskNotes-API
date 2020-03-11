require('dotenv').config();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

module.exports = {
    compareHash(password, hash) {
        return bcrypt.compare(password, hash);
    },

    generateToken(id) {
        return jwt.sign({ id }, process.env.SECRET, {
            expiresIn: '1d'
        });
    },

    async hashPassword(password) {
        return await bcrypt.hash(password, 8);
    }
}


