const express = require("express");
const bodyParser = require('body-parser');
const cors = require("cors");
const userRouter = require('./routers/userRouter');
const postRouter = require('./routers/postRouter');
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use('/',postRouter);
app.use('/',userRouter);


module.exports = app;