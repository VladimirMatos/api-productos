const { Router } = require("express");
const ROUTER = Router();
const productoController = require('../controllers/productos.controller');

ROUTER.get('/',productoController.buscarProducto);
ROUTER.get('/:id',productoController.buscarProductoPorId);
ROUTER.post('/',productoController.crearProducto);
ROUTER.delete('/:id',productoController.eliminarProductoPorId);
ROUTER.patch('/:id',productoController.editarProductoPorId);

module.exports = ROUTER;