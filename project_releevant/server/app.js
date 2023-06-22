const express = require("express");
const dotenv =require("dotenv");
const logger = require('morgan');

const userRouter = require("./routes/userRouter");
const employmentRouter = require("./routes/employmentRouter")


dotenv.config()
const app = express();

app.use(logger('dev'))
app.use(express.json())
app.use("/user", userRouter)
app.use("/register",userRouter)
app.use("/path", userRouter)
app.use("/", employmentRouter)


module.exports = app;