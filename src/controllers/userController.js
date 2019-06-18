const userService = require('../services/userService');

exports.getName = (req, res, next) => {
    res.status(200).send(userService.getName());
};