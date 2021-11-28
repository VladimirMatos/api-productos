const express = require('express');
const morgan = require('morgan');
const bodyParse = require('body-parser');
const app = express();

//Middleware
app.use(bodyParse.json());
app.use(morgan('dev'));
app.use(require('./src/routes/productos.routes'));
app.use(require('./src/routes/barcode.routes'));


//Routes
app.use('/api/products', require('./src/routes/productos.routes'));
app.use('/api/barcode', require('./src/routes/barcode.routes'));


module.exports = app;