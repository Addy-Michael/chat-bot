const express = require('express');
const questionController = require('../controller/questionController');

const router = express.Router();

router.route('/').get(questionController.getAll);
router.route('/:number').get(questionController.getQuestion);
router.route('/adult/:adult').get(questionController.adultQuestions);
router.route('/adult/:number/:adult').get(questionController.adultQuestion);
router.route('/child/:child').get(questionController.childQuestions);
router.route('/child/:number/:child').get(questionController.childQuestion);

module.exports = router;