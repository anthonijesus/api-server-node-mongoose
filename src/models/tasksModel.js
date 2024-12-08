const mongoose = require('mongoose');

const taskSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    isCompleted: {
        type: Boolean,
        default: false
    },
    creator: {
        type: String,
        required: true
    },
    estado: {
        type: Number,
        default: 1
    }
});

module.exports = mongoose.model('Task', taskSchema);