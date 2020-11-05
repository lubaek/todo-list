const addButton = document.querySelector(".add-btn");
let input = document.querySelector(".input");
const todos = document.querySelector(".todos");

function editItem(input) {
	input.disabled = !input.disabled;
}

function deleteItem(item) {
	todos.removeChild(item);
}

function makeDoneItem(input, editButton, doneButton) {
	if (input.classList.contains("marked")) {
		input.classList.remove("marked");
		doneButton.classList.remove("green-btn");
		editButton.disabled = false;
	} else {
		input.classList.add("marked");
		doneButton.classList.add("green-btn");
		editButton.disabled = true;
	}
}

function addItem(itemValue) {
	let input = document.createElement("input");
	input.type = "text";
	input.classList.add("todo-item__text");
	input.value = itemValue;
	input.disabled = true;

	let todoItem = document.createElement("div");
	todoItem.classList.add("todo-item");

	let editButton = document.createElement("button");
	editButton.classList.add("edit-btn");
	editButton.innerHTML = '<i class="far fa-edit">';

	let deleteButton = document.createElement("button");
	deleteButton.classList.add("delete-btn");
	deleteButton.innerHTML = '<i class="far fa-trash-alt">';

	let doneButton = document.createElement("button");
	doneButton.classList.add("done-btn");
	doneButton.innerHTML = '<i class="far fa-check-circle"></i>';

	todoItem.appendChild(input);
	todoItem.appendChild(doneButton);
	todoItem.appendChild(editButton);
	todoItem.appendChild(deleteButton);

	todos.appendChild(todoItem);

	doneButton.addEventListener("click", () =>
		makeDoneItem(input, editButton, doneButton)
	);
	editButton.addEventListener("click", () => editItem(input));
	deleteButton.addEventListener("click", () => deleteItem(todoItem));
}

function checkItem() {
	if (input.value != "") {
		addItem(input.value);
		input.value = "";
	} else {
		alert("enter something :3");
	}
}
addButton.addEventListener("click", checkItem);

window.addEventListener("keydown", (e) => {
	if (e.keyCode == 13) {
		checkItem();
	}
});
