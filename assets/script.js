let currentColumn = '';
let currentTaskId = null;

function createTask(column) {
    currentColumn = column;
    currentTaskId = null;
    document.getElementById('task-title').value = '';
    document.getElementById('task-desc').value = '';
    document.getElementById('task-modal').style.display = 'flex';
}

function saveTask() {
    const title = document.getElementById('task-title').value;
    const desc = document.getElementById('task-desc').value;
    if (!title) return;

    const taskId = currentTaskId || new Date().getTime().toString();
    const taskCard = {
        id: taskId,
        title,
        desc,
        column: currentColumn
    };

    let tasks = JSON.parse(localStorage.getItem('tasks')) || {};
    tasks[taskId] = taskCard;
    localStorage.setItem('tasks', JSON.stringify(tasks));

    renderTasks();
    closeModal();
}

function renderTasks() {
    const columns = ['todo', 'in-progress', 'done'];
    columns.forEach(column => {
        document.getElementById(`${column}-content`).innerHTML = '';
    });

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

        document.getElementById(`${task.column}-content`).appendChild(taskElement);
    }
}

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

function dragStart(event) {
    event.dataTransfer.setData('text', event.target.id);
}

function allowDrop(event) {
    event.preventDefault();
}

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

window.onload = renderTasks;
