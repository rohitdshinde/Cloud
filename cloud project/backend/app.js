const express = require('express');
const cors = require('cors');
const userRouter = require('./routes/userRoute');

const corsOptions = {
    origin:['http://localhost:5173']
}

const app = express();
app.use(cors(corsOptions));
app.use(express.json());

app.use('/api/v1/users',userRouter);

module.exports = app;