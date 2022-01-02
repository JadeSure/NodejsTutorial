const express = require('express');
const { getAllStudents, addStudent, getStudentById, upadateStudentById, deleteStudentById, addCourseToStudent, removeCourseFromStudent } = require('../controllers/student')
const router = express.Router()

router.get('', getAllStudents)
router.get('/:id', getStudentById)
router.post('', addStudent)
router.delete('/:id', deleteStudentById)
router.put('/:id', upadateStudentById)
router.post('/:id/courses/:code', addCourseToStudent)
router.delete('/:id/courses/:code', removeCourseFromStudent)

module.exports = router;