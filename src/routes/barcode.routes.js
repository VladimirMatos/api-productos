const { Router } = require("express");
const ROUTER = Router();
const CONEXION_BASE_DE_DATOS = require('../database/database');

ROUTER.get('/', async(req,res) =>{
    try {
        const BUSCAR_BARCODE = await CONEXION_BASE_DE_DATOS.query('CALL sp_GetBarCode()');
        res.send(BUSCAR_BARCODE);
    } catch (error) {
        res.status(422).json({message: error});
    }
});

ROUTER.get('/:barCode', async(req,res)=>{
    try {
        const BAR_CODE_PARAMETRO = req.params.barCode;
        const BUSCAR_PRODUCTO_POR_BAR_CODE = await CONEXION_BASE_DE_DATOS.query('CALL sp_GetProductsByBarCode(?)', [BAR_CODE_PARAMETRO]);
        res.send(BUSCAR_PRODUCTO_POR_BAR_CODE);  
    } catch (error) {
        res.status(422).json({message: error});
    }
});

module.exports = ROUTER;