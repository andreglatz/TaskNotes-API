const mongoose = require('../Database/Connections/Mongodb');

const TaskSchema = new mongoose.Schema({
    description: {
        type: String
    },
    user: {
        type: Number
    }
}, { timestamps: true });

const Task = mongoose.model('Task', TaskSchema);

module.exports = Task;