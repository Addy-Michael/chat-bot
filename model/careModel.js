const mongoose = require('mongoose');

const careSchema = new mongoose.Schema({
    heading: String,
    number: Number,
    content: String
})

const care = mongoose.model('CareMessage',careSchema);

module.exports = care;