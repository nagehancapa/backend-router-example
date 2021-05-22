const express = require("express");
const router = require("./router");
const studentRouter = require("./studentRouter");
const teacherRouter = require("./teacherRouter");

const app = express();

app.use(router);
app.use(studentRouter);
app.use(teacherRouter);

const port = 4000;
app.listen(port);
