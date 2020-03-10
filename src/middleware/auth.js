require('dotenv').config();
const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    const token = req.headers.authorization.split(' ')[1];
    try {

        if (!token) throw 6;
        jwt.verify(token, process.env.SECRET, (e, decoded) => {
            if (e) console.log(e);

            req.body.userId = decoded.id;
            next();
        });

    } catch (e) {
        switch (e) {
            case 6:
                e = { error: { message: "No token provided.", code: 6 } };
                break;
            case 7:
                e = { error: { message: "Invalid token.", code: 7 } };
                break;
        }
        console.log(e);
        res.status(401).json(e);
    }
}