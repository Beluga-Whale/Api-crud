const express = require('express');
const dotenv = require('dotenv').config();
port = process.env.PORT || 4000

const app = express();

app.get('/test', (req, res) => {
    res.json({ test: "test" })
})

app.listen(port, () => {
    console.log(`server start ${port}`);
})