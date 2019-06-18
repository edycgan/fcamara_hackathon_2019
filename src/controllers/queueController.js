const queueService = require('../services/queueService');

exports.getQueues = (req, res, next) => {
    res.status(200).send(queueService.getQueues());
};

exports.insertQueue = (req, res) => {
	queueService.insertQueue(req, res);
	res.status(200);
	res.end();
}

exports.updateQueue = (req, res) => {
	queueService.updateQueue(req, res);
	res.status(200);
	res.end();
}

exports.deleteQueue = (req, res) => {
	queueService.deleteQueue(req, res);
	res.status(200);
	res.end();
}