const { Router } = require("express");
const router = Router();
const conexionBaseDeDatos = require('../database/database');

router.get('/', async(req,res) =>{
    const buscarProducto = await conexionBaseDeDatos.query('CALL sp_GetProducts()');
    res.send(buscarProducto);
});



module.exports = router;