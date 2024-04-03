function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');

    const taskText = taskInput.value.trim();

    if (taskText !== '') {
        const listItem = document.createElement('li');
        
        const taskSpan = document.createElement('span');
        taskSpan.textContent = taskText;

        const taskEditInput = document.createElement('input');
        taskEditInput.type = 'text';
        taskEditInput.value = taskText;
        taskEditInput.style.display = 'none';

        const editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.onclick = function() {
            taskSpan.style.display = 'none';
            taskEditInput.style.display = 'inline';
            taskEditInput.focus();
        };

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.onclick = function() {
            listItem.remove();
        };

        listItem.appendChild(taskSpan);
        listItem.appendChild(taskEditInput);
        listItem.appendChild(editButton);
        listItem.appendChild(deleteButton);

        taskList.appendChild(listItem);

        taskInput.value = '';

        listItem.addEventListener('click', function() {
            this.remove();
        });
        
        taskEditInput.addEventListener('blur', function() {
            taskSpan.textContent = this.value;
            taskSpan.style.display = 'inline';
            this.style.display = 'none';
        });
    }
}
