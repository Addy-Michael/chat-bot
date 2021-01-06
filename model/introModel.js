const mongoose = require('mongoose');

const introSchema = new mongoose.Schema({
    number: Number,
    question: String
});

const Intro = mongoose.model('Introduction',introSchema);

module.exports = Intro;