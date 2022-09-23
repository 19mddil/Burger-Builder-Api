const express = require('express');
const cors = require('cors');

//Cross Origin Resource Sharing

const app = express();

app.use(cors());
app.use(express.json()); // POST -> .json -> req.body

module.exports = app;