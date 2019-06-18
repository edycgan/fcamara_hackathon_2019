const express = require('express');
const userController = require('../controllers/userController');

const router = express.Router();

router.get('/name', userController.getName);

module.exports = router;