require('dotenv').config();
const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    const token = req.headers.authorization.split(' ')[1];
    try {

        if (!token) throw 6;
        jwt.verify(token, process.env.SECRET, (e, decoded) => {
            if (e) throw e;

            req.body.userId = decoded.id;
            next();
        });

    } catch (e) {
        switch (e) {
            case 6:
                e = { error: { message: "No token provided.", code: 6 } };
                break;
            default:
                e = { error: { message: e.message, code: 7 } };
                break;
        }
        res.status(401).json(e);
    }
}