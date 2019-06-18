var dataObject = require('./dataObject');

function insertUser(paramUser, paramQueue) {
	for (let i = 0; i < dataObject.internalDataObject.length; i++) {
		if (dataObject.internalDataObject[i].id == paramQueue.id) {
			paramUser.id = getBiggerId(paramQueue);
			dataObject.internalDataObject[i].users.push(paramUser);
			break;
		}
	}
}

function updateUser(paramUser, paramQueue) {
	for (let i = 0; i < dataObject.internalDataObject.length; i++) {
		if (dataObject.internalDataObject[i].id == paramQueue.id) {
			for (let j = 0; j < dataObject.internalDataObject[i].users.length; j++) {
				if (dataObject.internalDataObject[i].users[j].id == paramUser.id) {
					dataObject.internalDataObject[i].users[j] = paramUser;
					return;
				}
			}
		}
	}
}

function deleteUser(paramUser, paramQueue) {
	for (let i = 0; i < dataObject.internalDataObject.length; i++) {
		if (dataObject.internalDataObject[i].id == paramQueue.id) {
			for (let j = 0; j < dataObject.internalDataObject[i].users.length; j++) {
				if (dataObject.internalDataObject[i].users[j].id == paramUser.id) {
					dataObject.internalDataObject[i].users.splice(j, 1);
					return;
				}
			}
		}
	}
}

function getBiggerId(paramQueue) {
    let biggerId = 1;

    for (let i = 0; i < dataObject.internalDataObject.length; i++) {
        if (dataObject.internalDataObject[i].id == paramQueue.id) {
			if (dataObject.internalDataObject[i].users.length == 0) {
				return biggerId;
			}

            for (let j = 0; j < dataObject.internalDataObject[i].users.length; j++) {
				if (dataObject.internalDataObject[i].users[j].id >= biggerId) {
					biggerId = dataObject.internalDataObject[i].users[j].id;
				}
			}

			break;
        }
    }

    return ++biggerId;
}

module.exports = {
	insertUser,
	updateUser,
	deleteUser
}