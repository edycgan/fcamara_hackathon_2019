const express = require('express');
const controller = require('../controllers/userController');

const router = express.Router();

router.get('/name', controller.getName);

module.exports = router;