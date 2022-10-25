// @desc List Student
// @route GET /students
const listStudents = (req, res) => {
    res.status(200).json({ message: "Students List" })
}

const createlistStudent = (req, res) => {
    res.status(200).json({ message: "Students Create" })
}

const editlistStudent = (req, res) => {
    res.status(200).json({ message: `Students Edit ${req.params.id}` })
}

const deletelistStudent = (req, res) => {
    res.status(200).json({ message: `Students Delete ${req.params.id}` })
}

module.exports = {
    listStudents,
    createlistStudent,
    editlistStudent,
    deletelistStudent
}