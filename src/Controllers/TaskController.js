const Task = require('../Models/Task');

// INDEX, SHOW, STORE, UPDATE, DESTROY
module.exports = {
    async show(req, res) {
        try {

            const Tasks = await Task.find().where('user').equals(req.body.userId);
            res.json({ Tasks });
        } catch (e) {
            console.log(e);
            res.status(500).json({ error: { message: "Server error", code: 5 } });
        }
    },

    async store(req, res) {
        try {
            var { description, userId } = req.body;

            const created = await Task.create({
                description,
                user: userId
            });

            res.json({ success: true, created });

        } catch (e) {
            return res.status(500).json({ error: { message: "Server error", code: 8 } });
        }
    },

    async update(req, res) {
        try {
            const { taskID } = req.params;
            const { userId, description } = req.body;

            const updated = await Task.findOneAndUpdate({ _id: taskID, user: userId }, {
                description
            }, { upsert: true, useFindAndModify: false, new: true });

            res.json({ success: true, updated });
        } catch (e) {
            console.log(e);
            return res.status(500).json({ error: { message: "Server error", code: 9 } });
        }
    },

    async delete(req, res) {
        try {
            const { taskID } = req.params;
            const { userId, description } = req.body;

            const deleted = await Task.findOneAndDelete({ _id: taskID, user: userId });

            res.json({ success: true, deleted });
        } catch (e) {
            console.log(e);
            return res.status(500).json({ error: { message: "Server error", code: 10 } });
        }
    }
}