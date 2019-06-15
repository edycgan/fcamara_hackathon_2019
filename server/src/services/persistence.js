//Edyr
var exports = module.exports = {};

var list = [];
const user = require('../bean/user.js')
const queue = require('../bean/queue.js')

exports.addUser = function(user, queueId) {
    var curQueue = queues[queueId];
    curQueue.users.push(user);
    list[queueId] = curQueue;
}

exports.addQueue = function(p_queue) {
    list[p_queue.id] = p_queue;
}

function removeUser(user, queueId) {
    var curUsers = queues[queueId];
    for (let i = 0; i <= curUsers.length; i++) {
        curUsers[i - 1] = curUsers[i];
    }
    curUsers.pop();
    queues[queueId] = curUsers;
}

exports.listAll = function() {
    return JSON.stringify(list);
}