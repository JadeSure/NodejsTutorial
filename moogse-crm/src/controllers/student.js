const Student = require('../models/student')
const Course = require('../models/course')

async function getAllStudents(req, res) {
    const students = await Student.find();
    res.send(students)
}

async function getStudentById(req, res) {
    const { id } = req.params
    const student = await Student.findOne({ id }).populate('courses', 'name, description').exec();

    if (!student) {
        return res.sendStatus(404)
    }
    return res.send(student)
}

async function addStudent(req, res) {
    const { firstname, lastname, email } = req.body

    const student = new Student({
        firstname,
        lastname,
        email
    })
    try {
        await student.save();
    } catch (e) {
        console.log(e)
    }

    return res.status(201).json(student)
}

async function upadateStudentById(req, res) {
    const { id } = req.params;
    const { firstname, lastname, email } = req.body

    const student = await Student.findByIdAndUpdate(id, { firstname, lastname, email }, { new: true }).exec()
    if (!student) {
        return res.sendStatus(404)
    }

    return res.send(student)
}

async function deleteStudentById(req, res) {
    const { id } = req.params
    const student = await Student.findByIdAndDelete(id)
    if (!student) {
        return res.sendStatus(404)
    }
    await Course.updateMany(
        { students: student.id },
        {
            $pull: {
                students: student.id
            }
        })
    return res.sendStatus(204)
}


async function addCourseToStudent(req, res) {
    const { id, code } = req.params;
    const course = await Course.findById(code)
    const student = await Student.findById(id)

    if (!course || !student) {
        return res.sendStatus(404)
    }

    student.courses.addToSet(course._id);
    course.students.addToSet(student._id);
    await student.save();
    await course.save();
    return res.json(student)
}

async function removeCourseFromStudent(req, res) {
    const { id, code } = req.params
    const course = await Course.findById(code)
    const student = await Student.findById(id)

    if (!course || !student) {
        return res.sendStatus(404)
    }

    student.courses.pull(course._id)
    course.students.pull(student._id)
    await student.save();
    await course.save();
    return res.json(student)
}


module.exports = {
    getAllStudents,
    addStudent,
    getStudentById,
    upadateStudentById,
    deleteStudentById,
    addCourseToStudent,
    removeCourseFromStudent
}