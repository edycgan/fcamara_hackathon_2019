const queueService = require('../services/queueService');

exports.getQueues = (req, res, next) => {
    res.status(200).send(queueService.getQueues());
};

exports.insertQueues = (req, res) => {
    queueService.insertQueues(req, res);
    res.render("C:\\Users\\edyrc\\pro\\fcamaragerenciadorfila\\client\\index.ejs")
}