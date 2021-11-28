const express = require('express');
const morgan = require('morgan');
const bodyParse = require('body-parser');
const app = express();

//import routes
const productoRoutes = require('./src/routes/productos.routes');
const barCodeRoutes = require('./src/routes/barcode.routes');


//Middleware
app.use(bodyParse.json());
app.use(morgan('dev'));
app.use(require('./src/routes/productos.routes'));
app.use(require('./src/routes/barcode.routes'));


//Routes
app.use('/api/products', productoRoutes);
app.use('/api/barcode', barCodeRoutes);


module.exports = app;