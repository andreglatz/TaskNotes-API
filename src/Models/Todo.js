const mongoose = require('../Database/Connections/Mongodb');

const TodoSchema = new mongoose.Schema({
    description: {
        type: String
    },
    user: {
        type: Number
    }
}, { timestamps: true });

const Todo = mongoose.model('Todo', TodoSchema);

module.exports = Todo;