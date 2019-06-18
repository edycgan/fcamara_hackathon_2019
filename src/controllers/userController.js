const userService = require('../services/userService');

exports.listUser = (req, res, next) => {
    res.status(200).send(userService.getName());
};

exports.insertUser = (req, res) => {
    userService.insertUser(req, res);
    res.status(200);
    res.end();
}

exports.updateUser = (req, res) => {
    userService.updateUser(req, res);
    res.status(200);
    res.end();
}

exports.deleteUser = (req, res) => {
    userService.deleteUser(req, res);
    res.status(200);
    res.end();
}