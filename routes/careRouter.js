const express = require('express');
const careController = require('../controller/careController');

const router = express.Router();

router.route('/').get(careController.getAll);
router.route('/:number').get(careController.getQuestion);

module.exports = router;