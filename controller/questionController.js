const Main = require('../model/mainQuesModel')

exports.getAll = async (req,res,next) => {
    try {
        const query = Main.find({}).sort('number');
        const doc = await query;

        res.status(201).json({
            status: "success",
            results: doc.length,
            question: doc
        })
        return next();
    } catch (error) {
        console.log("Error from intro  question controller");
    }
}

exports.getQuestion = async (req,res,next) => {
    try {
        const query = Main.findOne({number: req.params.number});
        const doc = await query;

        res.status(201).json({
            status: "success",
            question: doc
        })
        return next();
    } catch (error) {
        console.log('error from get question');
    }
}

exports.adultQuestions = async (req,res,next) => {
    try {
        const query = Main.find().select('-child');
        const doc = await query;

        res.status(201).json({
            status: "success",
            question: doc
        })
        return next();
    } catch (error) {
        console.log('error from get adult questions');
    }
}

exports.adultQuestion = async (req,res,next) => {
    console.log(req.params);
    try {
        const query = Main.find({number: req.params.number}).select('-child');
        const doc = await query;

        res.status(201).json({
            status: "success",
            question: doc
        })
        return next();
    } catch (error) {
        console.log('error from get adult questions');
    }
}

exports.childQuestions = async (req,res,next) => {
    try {
        const query = Main.find().select('-adult');
        const doc = await query;

        res.status(201).json({
            status: "success",
            question: doc
        })
    } catch (error) {
        console.log('error from get child questions');
    }
}

exports.childQuestion = async (req,res,next) => {
    try {
        const query = Main.find({number: req.params.number}).select('-child');
        const doc = await query;

        res.status(201).json({
            status: "success",
            question: doc
        })
    } catch (error) {
        console.log('error from get child questions');
    }
}