const express = require('express');
const userController = require('../controllers/userController');

const router = express.Router();

router.get('/list', userController.listUser);
router.post('/insert', userController.insertUser);
router.post('/update', userController.updateUser);
router.post('/delete', userController.deleteUser);

module.exports = router;