const mongoose = require('mongoose');

const studentSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true,
        }
    }, {
    collection: "students"
}
)

module.exports = mongoose.model('Students', studentSchema)