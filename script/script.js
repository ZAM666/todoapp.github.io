document.addEventListener('DOMContentLoaded', function() {

	const taskInput = document.getElementById('add-task');
	const addButton = document.getElementById('addButton');
	const deleteButton = document.getElementsByClassName('delete');
	const todoTasks = document.getElementById('todoTasks');
	const todoWarning = document.getElementById('todoWarning');
	const finishedTasks = document.getElementById('finishedTasks');
	const finishedWarning = document.getElementById('finishedWarning');

	var createNewTask = function(createTask) {
		var newItem = document.createElement('li');
		var itemInput = document.createElement('input');
		var deleteButton = document.createElement('button');
		var checkButton = document.createElement('button');
		var editButton = document.createElement('button');
		var value = taskInput.value;

		deleteButton.addEventListener('click', deleteTask);
		editButton.addEventListener('click', editTask);
		checkButton.addEventListener('click', doneTask);
	
		itemInput.type = 'text';
		itemInput.disabled = 'true';
		deleteButton.innerHTML = '<i class="fa fa-trash-o" aria-hidden="true"></i>';
		deleteButton.className = 'delete';
		editButton.innerHTML = '<i class="fa fa-pencil" aria-hidden="true"></i>';
		editButton.className= 'edit';
		checkButton.innerHTML = '<i class="fa fa-check-circle-o" aria-hidden="true"></i>';
		checkButton.className = 'check';

		newItem.appendChild(itemInput);
		newItem.appendChild(deleteButton);
		newItem.appendChild(editButton);
		newItem.appendChild(checkButton);

		itemInput.value = value;
		taskInput.value = '';

		todoTasks.appendChild(newItem);

		if (todoTasks.childNodes.length >= 4) {
			todoWarning.style.display = 'none';
		} else {
			todoWarning.style.display = 'block';
		}

	}

	var addTask = function() {
		var newItem = createElement(itemInput.value);
		todoTasks.appendChild(newItem);
		itemInput.value = '';
	}

	addButton.addEventListener('click', createNewTask);

	var deleteTask = function() {
		var newItem = this.parentNode;
		var list = newItem.parentNode;

		list.removeChild(newItem);
	}

	var editTask = function() {
		var newItem = this;
		var list = newItem.parentNode.firstChild;

		if (list === document.activeElement) {
			return false;
			// list.disabled = true;
		} else {
			return true;
			// list.disabled = false;
		}
		
	}

	var doneTask = function() {
		var newItem = this;
		var list = newItem.parentNode;
		// Remove button
		var checkButton = newItem.parentNode.lastChild;
		checkButton.remove();
		// Remove text
		finishedWarning.remove();
		// Add task to list
		finishedTasks.appendChild(list);
	}

});