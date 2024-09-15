// Variables to store the current column and task ID being edited or created
let currentColumn = '';
let currentTaskId = null;

// Function to open the task creation modal
function createTask(column) {
    currentColumn = column;
    currentTaskId = null;
    document.getElementById('task-title').value = '';
    document.getElementById('task-desc').value = '';
    document.getElementById('task-modal').style.display = 'flex';
}

// Function to save a task (either creating a new one or updating an existing one)
function saveTask() {
    const title = document.getElementById('task-title').value;
    const desc = document.getElementById('task-desc').value;
    if (!title) return;

    // Generate a new ID if creating a new task
    const taskId = currentTaskId || new Date().getTime().toString();
    const taskCard = {
        id: taskId,
        title,
        desc,
        column: currentColumn
    };

    // Retrieve the existing tasks from local storage or initialize an empty object
    let tasks = JSON.parse(localStorage.getItem('tasks')) || {};
    tasks[taskId] = taskCard;
    localStorage.setItem('tasks', JSON.stringify(tasks));

    renderTasks();
    closeModal();
}

// Function to render tasks on the board based on their status
function renderTasks() {
    const columns = ['todo', 'in-progress', 'done'];
    columns.forEach(column => {
        document.getElementById(`${column}-content`).innerHTML = '';
    });

    // Retrieve the tasks from local storage
    const tasks = JSON.parse(localStorage.getItem('tasks')) || {};
    for (const taskId in tasks) {
        const task = tasks[taskId];
        const taskElement = document.createElement('div');
        taskElement.className = 'task-card';
        taskElement.draggable = true;
        taskElement.ondragstart = dragStart;
        taskElement.id = task.id;
        taskElement.innerHTML = `<h4>${task.title}</h4><p>${task.desc}</p>`;
        taskElement.onclick = () => editTask(task);

        // Apply the color based on the column
        applyTaskColor(taskElement, task.column);

        document.getElementById(`${task.column}-content`).appendChild(taskElement);
    }
}

// Function to change the color of a task card based on its column
function applyTaskColor(taskElement, column) {
    switch (column) {
        case 'todo':
            taskElement.style.backgroundColor = '#ffffff'; // White for "To Do"
            taskElement.style.borderColor = '#ccc';
            break;
        case 'in-progress':
            taskElement.style.backgroundColor = '#e0f7fa'; // Green for "In Progress"
            taskElement.style.borderColor = '#00796b';
            break;
        case 'done':
            taskElement.style.backgroundColor = '#ffebee'; // Red for "Done"
            taskElement.style.borderColor = '#b71c1c';
            break;
    }
}

// Function to open the task modal for editing an existing task
function editTask(task) {
    currentColumn = task.column;
    currentTaskId = task.id;
    document.getElementById('task-title').value = task.title;
    document.getElementById('task-desc').value = task.desc;
    document.getElementById('task-modal').style.display = 'flex';
}

function closeModal() {
    document.getElementById('task-modal').style.display = 'none';
}

// Function to handle the drag start event for a task card
function dragStart(event) {
    event.dataTransfer.setData('text', event.target.id);
}

function allowDrop(event) {
    event.preventDefault();
}

// Function to handle the drop event for moving tasks between columns
function drop(event) {
    event.preventDefault();
    const taskId = event.dataTransfer.getData('text');
    const tasks = JSON.parse(localStorage.getItem('tasks')) || {};
    const task = tasks[taskId];
    
    if (task) {
        const newColumn = event.target.closest('.kanban-column-content').id.replace('-content', '');
        task.column = newColumn;
        tasks[taskId] = task;
        localStorage.setItem('tasks', JSON.stringify(tasks));
        renderTasks();
    }
}

// Initialize the kanban board by rendering tasks when the page loads
window.onload = renderTasks;
