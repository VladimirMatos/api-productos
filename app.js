const express = require('express');
const morgan = require('morgan');
const bodyParse = require('body-parser');
const app = express();

//Middleware
app.use(bodyParse.json());
app.use(morgan('dev'));


//Routes



module.exports = app;