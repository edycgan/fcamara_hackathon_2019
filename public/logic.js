function btnQueueUpdateOnClick(paramButtonId) {
	let i = paramButtonId.lastIndexOf("_");
	let queueId = paramButtonId.substring(i + 1, paramButtonId.length);

	$("#inp_queue_update_id").val(queueId);
}

function btnQueueDeleteOnClick(paramButtonId) {
	let i = paramButtonId.lastIndexOf("_");
	let queueId = paramButtonId.substring(i + 1, paramButtonId.length);

	let formData = {
		id: queueId
	}

	$.ajax({
		type: "POST",
		url: "/queue/delete",
		data: formData
	});

	updateView();
}

function btnUserInsertOnClick(paramButtonId) {
	let i = paramButtonId.lastIndexOf("_");
	let queueId = paramButtonId.substring(i + 1, paramButtonId.length);
	
	$("#inp_queue_id").val(queueId);
}

function btnUserDeleteOnClick(paramButtonId) {
	let i = paramButtonId.indexOf("*");
	let j = paramButtonId.lastIndexOf("*");
	let queueId = paramButtonId.substring(i + 1, j);
	let userId = paramButtonId.substring(j + 1, paramButtonId.length);

	let formData = {
		id: userId,
		id_queue: queueId
	}

	$.ajax({
		type: "POST",
		url: "/user/delete",
		data: formData
	});

	updateView();
}

function btnUserUpdateOnClick(paramButtonId) {
	let i = paramButtonId.indexOf("*");
	let j = paramButtonId.lastIndexOf("*");
	let queueId = paramButtonId.substring(i + 1, j);
	let userId = paramButtonId.substring(j + 1, paramButtonId.length);

	$("#inp_user_update_queue_id").val(queueId);
	$("#inp_user_update_user_id").val(userId);
}

function formQueueSubmit(event) {
	event.preventDefault();

	let formData = {
		nome: $("#inp_queue_name").val()
	}

	$.ajax({
		type: "POST",
		url: "/queue/insert",
		data: formData
	});

	$("#inp_queue_name").val("");
	$("#modalAdicionar").modal("hide");
	updateView();
}

function formUserSubmit(event) {
	event.preventDefault();

	let formData = {
		nome: $("#inp_user_name").val(),
		status: 2,
		id_queue: $("#inp_queue_id").val()
	}

	$.ajax({
		type: "POST",
		url: "/user/insert",
		data: formData
	});

	$("#inp_user_name").val("");
	$("#modalEntrarFila").modal("hide");
	updateView();
}

function formUserUpdateSubmit(event) {
	event.preventDefault();

	let formData = {
		id: $("#inp_user_update_user_id").val(),
		nome: $("#inp_user_update_name").val(),
		status: 2,
		id_queue: $("#inp_user_update_queue_id").val()
	}

	$.ajax({
		type: "POST",
		url: "/user/update",
		data: formData
	});

	$("inp_user_update_name").val("");
	$("#mdlEditarUsuario").modal("hide");
	
	updateView();
}

function formQueueUpdateSubmit(event) {
	event.preventDefault();

	let formData = {
		id: $("#inp_queue_update_id").val(),
		nome: $("#inp_queue_update_name").val(),
	}

	$.ajax({
		type: "POST",
		url: "/queue/update",
		data: formData
	});

	$("inp_queue_update_name").val("");
	$("#mdlQueueUpdate").modal("hide");
	
	updateView();
}

$(document).ready(function () {
	$("#form_queue").submit(formQueueSubmit);
	$("#form_user").submit(formUserSubmit);
	$("#form_user_update").submit(formUserUpdateSubmit);
	$("#form_queue_update").submit(formQueueUpdateSubmit);

	updateView();
})

function updateView() {
	$.get("/queue/list", updateViewSucess);
}

function updateViewSucess(data) {
	let json = JSON.parse(data);

	let divQueues = document.getElementById("div_queues");
	while (divQueues.firstChild) {
		divQueues.removeChild(divQueues.firstChild);
	}

	for (let i = 0; i < json.length; i++) {
		let divQueueDummy = document.getElementById("div_queue_users_");
		let divQueue = divQueueDummy.cloneNode(true);
		divQueue.id = divQueue.id + json[i].id;
		divQueue.className = divQueue.className.replace("d-none", "");
		let btnQueueName = divQueue.querySelector("#btn_queue_name");
		btnQueueName.innerHTML = json[i].nome;
		let btnUserInsert = divQueue.querySelector("#btn_user_insert_");
		btnUserInsert.id += json[i].id;
		let btnQueueUpdate = divQueue.querySelector("#btn_queue_update_");
		btnQueueUpdate.id += json[i].id;
		let btnQueueDelete = divQueue.querySelector("#btn_queue_delete_");
		btnQueueDelete.id += json[i].id;

		let tbdUsers = divQueue.querySelector("#tbd_users");
		for (let j = 0; j < json[i].users.length; j++) {
			let id = document.createTextNode(json[i].users[j].id);
			let nome = document.createTextNode(json[i].users[j].nome);
			let status = document.createTextNode(returnStatusName(json[i].users[j].status));

			let buttonEdit = document.createElement("BUTTON");
			buttonEdit.id = "btn_edit_user*" + json[i].id + "*" + json[i].users[j].id;
			buttonEdit.innerHTML = "Editar";
			buttonEdit.className = "btn btn-primary";
			buttonEdit.setAttribute("data-toggle", "modal");
			buttonEdit.setAttribute("data-target", "#mdlEditarUsuario");
			buttonEdit.onclick = function() {
				btnUserUpdateOnClick(this.id);
			}
			let buttonDelete = document.createElement("BUTTON");
			buttonDelete.id = "btn_delete_user*" + json[i].id + "*" + json[i].users[j].id;
			buttonDelete.innerHTML = "Deletar";
			buttonDelete.className = "btn btn-danger ml-3";
			buttonDelete.onclick = function() {
				btnUserDeleteOnClick(this.id);
			}
			
			let row = tbdUsers.insertRow();
			let cellId = row.insertCell();
			cellId.appendChild(id);
			let cellNome = row.insertCell();
			cellNome.appendChild(nome);
			let cellStatus = row.insertCell();
			cellStatus.appendChild(status);
			let cellAction = row.insertCell();
			cellAction.appendChild(buttonEdit);
			cellAction.appendChild(buttonDelete);
		}

		divQueues.appendChild(divQueue);
	}
}

function returnStatusName(statusId) {
	switch(Number(statusId)) {
		case 1:
			return "Em atendimento"
		case 2:
			return "Aguardando";
	}
}