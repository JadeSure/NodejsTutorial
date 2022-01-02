const tasks = [];
function* generateID() {
    let id = 1
    while (true) {
        yield id++
    }
}

const generateId = generateID()
const getItemID = () => generateId.next().value

function addTask({ description }) {
    const task = { description: description, id: getItemID(), done: false }
    tasks.push(task)
    return task;
}

function getAllTasks({ description }) {
    if (description) {
        const filtered = tasks.filter(t => t.description.includes(description));
        return filtered;
    }
    return tasks;
}

function getTaskById(id) {
    return tasks.find(i => i.id === id);
}

function getTaskIndexById(id) {
    return tasks.findIndex(i => i.id === id);
}

function deleteTaskById(id) {
    const taskIndex = getTaskIndexById(id);
    tasks.splice(taskIndex, 1);
}

function updateTaskById(id, { description, done }) {
    const task = getTaskById(id);
    if (done !== undefined) {
        task.done = done;
    }
    if (description !== undefined) {
        task.description = description;
    }
    return task;
}

module.exports = {
    addTask,
    deleteTaskById,
    getAllTasks,
    getTaskById,
    updateTaskById
}




