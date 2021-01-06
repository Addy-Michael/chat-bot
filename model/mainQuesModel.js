const mongoose = require('mongoose');

const mainSchema = new mongoose.Schema({
    number: Number,
    question: {
        type: String,
        required: [true,'Please type a question']
    },
    subheading: String,
    subQuestion: [String],
    responses: [String],
    adult: [String],
    child: [String]
});

const mainQuestion = mongoose.model('MainQuestion',mainSchema);

module.exports = mainQuestion;