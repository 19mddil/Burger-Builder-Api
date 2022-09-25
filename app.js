const express = require('express');
const cors = require('cors');//If frontend and backend servers are different.
const compression = require('compression');
const userRouter = require('./routers/userRouter');
const orderRouter = require('./routers/orderRouter');
const morgan = require('morgan');

//Cross Origin Resource Sharing

const app = express();

if (process.env.NODE_ENV === 'development') {
    console.log("development server");
    app.use(morgan('dev'));
}

app.use(compression());
app.use(cors());
app.use(express.json()); // POST -> .json -> req.body


app.use('/api/user', userRouter);
app.use('/api/order', orderRouter);

module.exports = app;