// Edyr
const express = require('express');
const queueController = require('../controllers/queueController');

const router = express.Router();

router.get('/list', queueController.getQueues);
router.post('/insert', queueController.insertQueues);

module.exports = router;