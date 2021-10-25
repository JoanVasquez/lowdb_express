const express = require("express");
const morgan = require("morgan");
const indexController = require("./components/index.controller");

const app = express();
app.use(morgan("dev"));
app.use(express.json());

app.use("/api/v1", indexController);

module.exports = app;
