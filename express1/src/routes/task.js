const express = require('express');
const { getAllTasks, getTaskById, addTask, updateTaskById, deleteTaskById } = require('../controllers/task')
const router = express.Router();
const parseId = require('../middleware/parseId')
const checkTaskExist = require('../middleware/checkTaskExist')

router.get('', getAllTasks)

router.get('/:id', parseId, checkTaskExist, getTaskById)

router.post('', addTask)

router.delete('/:id', parseId, checkTaskExist, deleteTaskById)

router.put('/:id', parseId, checkTaskExist, updateTaskById)

module.exports = router;


