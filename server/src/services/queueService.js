//Edyr
const persistence = require('../services/persistence.js');
const queue = require("../bean/queue");

const getQueues = () => {
    return persistence.listAll();
}

const insertQueues = (req, res) => {
    nQueue = new queue(req.body.id, req.body.nome, new Array());
    console.log(nQueue)
    persistence.addQueue(nQueue);

}
  
  module.exports = {
    getQueues, insertQueues
}