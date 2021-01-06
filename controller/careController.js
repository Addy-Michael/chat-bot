const Care = require('../model/careModel');

exports.getAll = async (req,res,next) => {
    try {
        const query = Care.find().sort('number');
        const doc = await query;

        res.status(201).json({
            status: "success",
            results: doc.length,
            question: doc
        }) 
        return next();
    } catch (error) {
        console.log("Error from Care controller");
    }
}

exports.getQuestion = async (req,res,next) => {
    try {
        const query = Care.findOne({number: req.params.number});
        const doc = await query;

        res.status(201).json({
            status: "success",
            question: doc
        })
        return next();
    } catch (error) {
        console.log('error from get Care question');
    }
}

