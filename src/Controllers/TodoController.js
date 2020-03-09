const Todo = require('../Models/Todo');

// INDEX, SHOW, STORE, UPDATE, DESTROY
module.exports = {
    async show(req, res) {
        try {

            const todos = await Todo.find().where('id').limit(10);
            res.json({ todos });
        } catch (e) {
            console.log(e);
            res.status(500).json({ error: { message: "Server error", code: 5 } });
        }
    },

    async store(req, res) {
        try {
            var { description, userId } = req.body;

            const created = await Todo.create({
                description,
                userId
            });

            res.json({ success: true, created });

        } catch (e) {
            return res.status(500).json({ error: { message: "Server error", code: 8 } });
        }
    },

    async update(req, res) {
        try {
            const { userId } = req.body;


        } catch (e) {

        }
    }
}