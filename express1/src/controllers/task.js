const Task = require('../models/task')

function addTask(req, res) {
    const { description } = req.body

    if (!description) {
        return res.status(400).json('missing description')
    }

    const task = Task.addTask({ description })
    return res.status(201).json(task)

}

function getAllTasks(req, res) {

    const { description } = req.query
    const output = Task.getAllTasks({ description })
    res.send(output)
}

function getTaskById(req, res) {

    const { id } = req.params

    if (!id) {
        return res.sendStatus(404)
    }

    const getRes = Task.getTaskById(id);

    return !!getRes ? res.send(getRes) : res.sendStatus(404);

}

function updateTaskById(req, res) {

    const { id } = req.params
    const { description, done } = req.body

    const task = updateTaskById(id, { description, done })

    return res.json(task)
}

function deleteTaskById(req, res) {
    const { id } = req.params
    const deletedData = Task.deleteTaskById(id)
    return res.json(deletedData)
}


module.exports = {
    addTask,
    getAllTasks,
    getTaskById,
    updateTaskById,
    deleteTaskById
}