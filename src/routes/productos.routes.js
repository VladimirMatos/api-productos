const { Router } = require("express");
const ROUTER = Router();
const CONEXION_BASE_DE_DATOS = require('../database/database');


ROUTER.get('/', async(req,res) =>{
    try {
        const BUSCAR_PRODUCTO = await CONEXION_BASE_DE_DATOS.query('CALL sp_GetProducts()');
        res.send(BUSCAR_PRODUCTO);
    } catch (error) {
        res.status(422).json({message: error});
    }

});

ROUTER.get('/:id', async(req,res)=>{
    try {
        const ID_PARAMETRO = req.params.id;
        const BUSCAR_PRODUCTO_POR_ID = await CONEXION_BASE_DE_DATOS.query('CALL sp_GetProductsById(?)', [ID_PARAMETRO]);
        res.send(BUSCAR_PRODUCTO_POR_ID);
    } catch (error) {
        res.status(422).json({message: error});
    }

});


ROUTER.post('/', async(req,res) =>{
    const {nombre,categoria,precio} = req.body;
    const nuevoProducto ={
        nombre,
        categoria,
        precio
    }

    try {
        await CONEXION_BASE_DE_DATOS.query('INSERT INTO producto set ?',[nuevoProducto]);
        await CONEXION_BASE_DE_DATOS.query('CALL sp_PostBarCodeProducto()');
        const MOSTRAR_PRODUCTOS = await CONEXION_BASE_DE_DATOS.query('CALL sp_GetProducts()');
        res.send(MOSTRAR_PRODUCTOS);
    } catch (error) {
        res.status(422).json({message: error});
    }

});

module.exports = ROUTER;