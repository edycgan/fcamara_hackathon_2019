const persistence = require('../dao/userPersistence');
const user = require('../bean/user');
const queue = require('../bean/queue');

const insertUser = (req, res) => {
    let objUser = new user(Number(req.body.id), req.body.nome, req.body.status);
    let objQueue = new queue(Number(req.body.id_queue), "", []);
    persistence.insertUser(objUser, objQueue);
}

const updateUser = (req, res) => {
  let objUser = new user(Number(req.body.id), req.body.nome, req.body.status);
  let objQueue = new queue(Number(req.body.id_queue), "", []);
  persistence.updateUser(objUser, objQueue);
}

const deleteUser = (req, res) => {
  let objUser = new user(Number(req.body.id), req.body.nome, req.body.status);
  let objQueue = new queue(Number(req.body.id_queue), "", []);
  persistence.deleteUser(objUser, objQueue);
}

module.exports = {
    insertUser,
    updateUser,
    deleteUser
}