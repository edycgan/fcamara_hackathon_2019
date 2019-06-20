function btnUserInsertOnClick(paramButtonId) {
	let i = paramButtonId.lastIndexOf("_");
	let queueId = paramButtonId.substring(i + 1, paramButtonId.length);
	
	$("#inp_queue_id").val(queueId);
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
	})

	$("#inp_user_name").val("");
	$("#modalEntrarFila").modal("hide");
	updateView();
}

$(document).ready(function () {
	$("#form_queue").submit(formQueueSubmit);
	$("#form_user").submit(formUserSubmit);

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

		let tbdUsers = divQueue.querySelector("#tbd_users");
		for (let j = 0; j < json[i].users.length; j++) {
			let id = document.createTextNode(json[i].users[j].id);
			let nome = document.createTextNode(json[i].users[j].nome);
			let status = document.createTextNode(json[i].users[j].status);
			let buttonDelete = document.createElement("BUTTON");
			buttonDelete.innerHTML = "Deletar";
			buttonDelete.className = "btn btn-danger";
			
			let row = tbdUsers.insertRow();
			let cellId = row.insertCell();
			cellId.appendChild(id);
			let cellNome = row.insertCell();
			cellNome.appendChild(nome);
			let cellStatus = row.insertCell();
			cellStatus.appendChild(status);
			let cellAction = row.insertCell();
			cellAction.appendChild(buttonDelete);
		}

		divQueues.appendChild(divQueue);
	}
}