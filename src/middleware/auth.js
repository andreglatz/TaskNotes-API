require('dotenv').config();
const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    const token = req.header.authorization;
    try {

        if (!token) throw 6;
        jwt.verify(token, process.env.SECRET, (e, decoded) => {
            if (e) throw 7;

            req.body.userId = decoded.id;
            next();
        });

    } catch (e) {
        switch (e) {
            case 6:
                e = { error: { message: "No token provided.", code: 6 } };
                break;
            case 7:
                e = { error: { message: "Failded to authenticate token.", code: 7 } };
                break;
        }
        console.log(e);
        res.status(401).json(e);
    }
}