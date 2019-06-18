//Edyr
var dataObject = require('./dataObject');

function insertQueue(paramQueue) {
    paramQueue.id = getBiggerId();
    dataObject.internalDataObject.push(paramQueue);
    console.log(dataObject.internalDataObject);
}

function updateQueue(paramQueue) {
    for (let i = 0; i < dataObject.internalDataObject.length; i++) {
        if (dataObject.internalDataObject[i].id == paramQueue.id) {
            paramQueue.users = dataObject.internalDataObject[i].users;
            dataObject.internalDataObject[i] = paramQueue;
            break;
        }
    }
    console.log(dataObject.internalDataObject);
}

function deleteQueue(paramQueue) {
    for (let i = 0; i < dataObject.internalDataObject.length; i++) {
        if (dataObject.internalDataObject[i].id == paramQueue.id) {
            dataObject.internalDataObject.splice(i, 1);
            break;
        }
    }
    console.log(dataObject.internalDataObject);
}

function listAllQueuesAndUsers() {
    return JSON.stringify(dataObject.internalDataObject);
}

function getBiggerId() {
    let biggerId = 1;
    if (dataObject.internalDataObject.length == 0) {
        return biggerId;
    }

    for (let i = 0; i < dataObject.internalDataObject.length; i++) {
        if (dataObject.internalDataObject[i].id >= biggerId) {
            biggerId = dataObject.internalDataObject[i].id;
        }
    }

    return ++biggerId;
}

module.exports = {
    insertQueue,
    updateQueue,
    deleteQueue,
    listAllQueuesAndUsers
}