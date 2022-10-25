const Students = require('../models/studentModels')
const asyncHandler = require('express-async-handler')

// @desc List Student
// @route GET /students
const listStudents = asyncHandler(async (req, res) => {
    const students = await Students.find()
    res.status(200).json(students)
})

// @desc Create Student
// @route POST /students/create-student
const createStudent = asyncHandler(async (req, res) => {
    if (!req.body) {
        res.status(400)
        throw new Error("Please add a text field")
    }
    const student = await Students.create({
        name: req.body.name,
        email: req.body.email
    })
    res.status(200).json(student)
})

// @desc Edit Student
// @route PUT /students/edit-student/:id
const editStudent = asyncHandler(async (req, res) => {
    const student = await Students.findById(req.params.id)
    if (!student) {
        res.status(400)
        throw new Error('Student not found')
    }

    const updatedStudent = await Students.findByIdAndUpdate(req.params.id, req.body, { new: true })

    res.status(200).json(updatedStudent)
})

// @desc Dekete Student
// @route DELETE /students/delete-student/:id
const deleteStudent = asyncHandler(async (req, res) => {
    const student = await Students.findByIdAndDelete(req.params.id)
    if (!student) {
        res.status(400)
        throw new Error("Student not found")
    }
    res.status(200).json({ _id: req.params.id })
})

module.exports = {
    listStudents,
    createStudent,
    editStudent,
    deleteStudent
}