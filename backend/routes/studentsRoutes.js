const express = require('express');
const router = express.Router()
const {
    listStudents,
    createlistStudent,
    editlistStudent,
    deletelistStudent
} = require('../controllers/studentController')

router.get('/', listStudents)

router.post('/create-student', createlistStudent)

router.put('/edit-student/:id', editlistStudent)

router.delete('/delete-student/:id', deletelistStudent)



module.exports = router