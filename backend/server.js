const express = require('express');
const dotenv = require('dotenv').config();
const colors = require('colors')
const bodyParser = require('body-parser')
const ConnectDB = require("./config/db")
port = process.env.PORT || 4000
const studentRoute = require('./routes/studentsRoutes')

ConnectDB()
const app = express();
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/students', studentRoute)
app.listen(port, () => {
    console.log(`server start ${port}`);
})