const express = require('express');
const { getAllCourses, addCourse, getCourseById, upadateCourseById, deleteCourseById } = require('../controllers/course')
const router = express.Router()

router.get('', getAllCourses)
router.get('/:id', getCourseById)
router.post('', addCourse)
router.delete('/:id', deleteCourseById)
router.put('/:id', upadateCourseById)

module.exports = router;
