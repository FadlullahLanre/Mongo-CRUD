const mongoose = require('mongoose');

const toDoSchema = new mongoose.Schema({

    title: { type: String, default: null },
    content: { type: String, default: null },
    date_created: { type: Date, default: Date.now },

});

module.exports = mongoose.model('toDoList', toDoSchema);