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

    render() {
        const taskList = document.getElementById('taskList');
        taskList.innerHTML = '';

        this.tasks.forEach(task => {
            const taskElement = document.createElement('li');
            taskElement.textContent = task.description;
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

