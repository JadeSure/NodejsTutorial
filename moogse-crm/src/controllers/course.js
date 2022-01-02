const Course = require('../models/course')
const Student = require('../models/student')
const Joi = require('joi');

async function getAllCourses(req, res) {
    const courses = await Course.find();
    res.send(courses)
}

async function addCourse(req, res) {

    // validation data
    const schema = Joi.object({
        name: Joi.string().required(),
        code: Joi.string().regex(/^[a-zA-Z]+[0-9]+$/).required(),
        description: Joi.string()
    });
    const { name, code, description } = await schema.validateAsync(req.body, {
        allowUnknown: true,
        stripUnknown: true
    })

    const existingCourse = await Course.findById(code).exec()
    if (existingCourse) {
        return res.sendStatus(409)
    }

    const course = new Course({
        name,
        description,
        code
    })
    await course.save();
    return res.status(201).json(course)
}

async function getCourseById(req, res) {
    const { id } = req.params
    const courses = await Course.findOne({ id }).exec();
    if (!courses) {
        return res.sendStatus(404)
    }
    res.send(courses)

}

async function upadateCourseById(req, res) {
    const { id } = req.params
    const { name, description } = req.body
    // updateOne {_id: id}         {new: true} <= return updated data
    const courses = await Course.findByIdAndUpdate(id, { name, description }, { new: true }).exec();
    if (!courses) {
        return res.sendStatus(404)
    }

    return res.send(courses)
}

async function deleteCourseById(req, res) {
    const { id } = req.params
    const courses = await Course.findByIdAndDelete(id)
    if (!courses) {
        return res.sendStatus(404)
    }
    await Student.updateMany({ courses: courses._id }, {
        $pull: {
            courses: courses._id
        }
    })
    return res.sendStatus(204)
}

module.exports = {
    getAllCourses: getAllCourses,
    addCourse: addCourse,
    getCourseById: getCourseById,
    upadateCourseById: upadateCourseById,
    deleteCourseById: deleteCourseById
}