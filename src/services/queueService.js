//Edyr
const persistence = require('../dao/queuePersistence.js');
const queue = require("../bean/queue");

const getQueues = () => {
    return persistence.listAllQueuesAndUsers();
}

const insertQueue = (req, res) => {
    let objQueue = new queue(0, req.body.nome, new Array());
    persistence.insertQueue(objQueue);
}

const updateQueue = (req, res) => {
    let objQueue = new queue(req.body.id, req.body.nome, new Array());
    persistence.updateQueue(objQueue);
}

const deleteQueue = (req, res) => {
    let objQueue = new queue(req.body.id, "", []);
    persistence.deleteQueue(objQueue);
}

module.exports = {
    getQueues,
    insertQueue,
    updateQueue,
    deleteQueue
}