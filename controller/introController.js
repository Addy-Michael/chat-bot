const Intro = require('../model/introModel')

exports.getAll = async (req,res,next) => {
    try {
        const query = Intro.find().sort('number');
        const doc = await query;

        res.status(201).json({
            status: "success",
            results: doc.length,
            question: doc
        }) 
        return next();
    } catch (error) {
        console.log("Error from intro controller");
    }
}

exports.getQuestion = async (req,res,next) => {
    try {
        const query = Intro.findOne({number: req.params.number});
        const doc = await query;

        res.status(201).json({
            status: "success",
            question: doc
        })
        return next();
    } catch (error) {
        console.log('error from get intro question');
    }
}

