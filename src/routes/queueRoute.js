// Edyr
const express = require('express');
const queueController = require('../controllers/queueController');

const router = express.Router();

router.get('/list', queueController.getQueues);
router.post('/insert', queueController.insertQueue);
router.post('/update', queueController.updateQueue);
router.post('/delete', queueController.deleteQueue);

module.exports = router;