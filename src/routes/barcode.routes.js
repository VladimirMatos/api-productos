const { Router } = require("express");
const ROUTER = Router();
const barCodeController = require('../controllers/barcode.controller');

ROUTER.get('/',barCodeController.buscarBarCode);
ROUTER.get('/:barCode',barCodeController.buscarProductoPorBarCode);
ROUTER.delete('/:barCode',barCodeController.eliminarProductoPorBarCode);
ROUTER.post('/:id',barCodeController.cambiarCodeBarPorId);
ROUTER.get('/buscar/:id',barCodeController.buscarBarCodePorId);


module.exports = ROUTER;