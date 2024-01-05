class TaskManager {
    constructor() {
        this.tasks = [];
        this.currentId = 0;
    }

    addTask(description) {
        const task = {
            id: this.currentId++,
            description,
            completed: false
        };

        this.tasks.push(task);
    }

    deleteTask(taskId) {
        this.tasks = this.tasks.filter(task => task.id !== taskId);
    }

    render() {
        const taskList = document.getElementById('taskList');
        taskList.innerHTML = '';

        this.tasks.forEach(task => {
            const taskElement = document.createElement('li');
            taskElement.textContent = task.description + ``;

            const deleteTaskBtn = document.createElement('button');
            deleteTaskBtn.textContent = 'Delete';
            deleteTaskBtn.onclick = () => {
                this.deleteTask(task.id);
                this.render(); // Re-render the list after deletion
            };

            // Append the button to the task element
            taskElement.appendChild(deleteTaskBtn);

            // Append the task element to the task list
            taskList.appendChild(taskElement);
        });
    }
}

const taskManager = new TaskManager();

document.getElementById('taskForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const taskInput = document.getElementById('newTask');
    const description = taskInput.value.trim();

    if (description) {
        taskManager.addTask(description);
        taskInput.value = ''; 
        taskManager.render();
    }
    
})

