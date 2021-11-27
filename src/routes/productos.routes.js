const { Router } = require("express");
const router = Router();
const conexionBaseDeDatos = require('../database/database');

router.get('/', async(req,res) =>{
    const buscarProducto = await conexionBaseDeDatos.query('CALL sp_GetProducts()');
    res.send(buscarProducto);
});

router.get('/:id', async(req,res)=>{
    const idParametro = req.params.id;
    const buscarProductoPorId = await conexionBaseDeDatos.query('CALL sp_GetProductsById(?)', [idParametro]);
    res.send(buscarProductoPorId);
});

router.post('/', async(req,res) =>{
    const {nombre,categoria,precio} = req.body;
    const nuevoProducto ={
        nombre,
        categoria,
        precio
    }
    await conexionBaseDeDatos.query('INSERT INTO producto set ?',[nuevoProducto]);
    const mostrarProductos = await conexionBaseDeDatos.query('CALL sp_GetProducts()');
    res.send(mostrarProductos);
});

module.exports = router;