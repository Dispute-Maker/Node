const express = require("express");

const { connectMongoDb } = require("./connection");
const { logReqRes } = require("./middleware");
const userRouter = require("./routes/user");

const app = express();
const port = 8000;

//Connection
connectMongoDb("mongodb://127.0.0.1:27017/youtube-01");

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(logReqRes("log.txt"));

// Server
app.use("/api/users", userRouter);
app.listen(port, () => console.log(`server atarted at ${port}`));
