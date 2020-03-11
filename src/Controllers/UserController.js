const Utils = require('../utils/verifyContent');
const User = require('../Models/User');
const Auth = require('../utils/Auth');

// INDEX, SHOW, STORE, UPDATE, DESTROY
module.exports = {
    async login(req, res) {
        try {
            var { user, password } = req.body;

            Utils.isContentEnough({ user, password });

            user = await User.findOne({ where: { user } });

            if (user != null && await Auth.compareHash(password, user.password)) {
                var token = Auth.generateToken(user.id);
            } else {
                throw 1
            }

            res.json({ Login: true, token });

        } catch (e) {
            console.log(e);
            if (e == undefined) {
                e = { error: { message: "User or password is not enough", code: 3 } }
            } else {
                if (e == 1) {
                    e = { error: { message: "User or password incorrect", code: 4 } }
                }
            }
            console.log(e);
            res.status(500).json({ e });
        }
    },

    async register(req, res) {

        try {
            var { name, user, password } = req.body;

            Utils.isContentEnough({ user, password });

            password = await Auth.hashPassword(password);

            var created = await User.create({
                name,
                user,
                password
            });

            const token = Auth.generateToken(created.id);

            res.json({ success: true, token });

        } catch (e) {
            if (e == undefined) {
                e = { error: { message: "User or password is not defined", code: 1 } }
            } else {
                const findUser = await User.count({ where: { user } });
                if (findUser > 0) {
                    e = { error: { message: "User already register", code: 2 } }
                }
            }

            res.status(500).json({ error: e });
        }

    }

}