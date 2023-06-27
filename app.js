const express = require("express");

const app = express();

const Wlogger = require("./config/winston");
require("dotenv").config();

// Default middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
module.exports = app;