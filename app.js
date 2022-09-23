const express = require('express');
const cors = require('cors');//If frontend and backend servers are different.

//Cross Origin Resource Sharing

const app = express();

app.use(cors());
app.use(express.json()); // POST -> .json -> req.body

module.exports = app;