const express = require('express');
const introController = require('../controller/introController');

const router = express.Router();

router.route('/').get(introController.getAll);
router.route('/:number').get(introController.getQuestion);

module.exports = router;