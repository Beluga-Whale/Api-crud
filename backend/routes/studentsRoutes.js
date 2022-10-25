const express = require('express');
const router = express.Router()
const {
    listStudents,
    createStudent,
    editStudent,
    deleteStudent
} = require('../controllers/studentController')

router.get('/', listStudents)

router.post('/create-student', createStudent)

router.put('/edit-student/:id', editStudent)

router.delete('/delete-student/:id', deleteStudent)



module.exports = router