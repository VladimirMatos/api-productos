const CONEXION_BASE_DE_DATOS = require('../database/database');

const buscarBarCode = async(req,res) =>{
    try {
        const BUSCAR_BARCODE = await CONEXION_BASE_DE_DATOS.query('CALL sp_GetBarCode()');
        res.send(BUSCAR_BARCODE);
    } catch (error) {
        res.status(400).json({message: error});
    }
};

const buscarProductoPorBarCode = async(req,res)=>{
    try {
        const BAR_CODE_PARAMETRO = req.params.barCode;
        const BUSCAR_PRODUCTO_POR_BAR_CODE = await CONEXION_BASE_DE_DATOS.query('CALL sp_GetProductsByBarCode(?)', [BAR_CODE_PARAMETRO]);
        res.send(BUSCAR_PRODUCTO_POR_BAR_CODE);  
    } catch (error) {
        res.status(404).json({message: error});
    }
};

const eliminarProductoPorBarCode = async(req,res) => {
    try {
        const BAR_CODE_PARAMETRO = req.params.barCode;
        await CONEXION_BASE_DE_DATOS.query('CALL sp_DeleteBarCode(?)', [BAR_CODE_PARAMETRO]);
        res.status(200).json({message:'Producto eliminado'});
    } catch (error) {
        res.status(404).json({message: error});
    }
};

const cambiarCodeBarPorId = async(req,res) =>{
    try {
        const PRODUCTO_ID =req.params.id;
        await CONEXION_BASE_DE_DATOS.query('CALL sp_UpdateProductCodeBar(?)',[PRODUCTO_ID]);
        const MOSTRAR_CODE_BAR = await CONEXION_BASE_DE_DATOS.query('CALL sp_GetCodeBarById(?)', [PRODUCTO_ID]);
        res.send(MOSTRAR_CODE_BAR);
    } catch (error) {
        res.status(404).json({message: error});
    }
}

const buscarBarCodePorId = async(req,res) =>{
    try {
        const PRODUCTO_ID =req.params.id;
        const MOSTRAR_CODE_BAR = await CONEXION_BASE_DE_DATOS.query('CALL sp_GetCodeBarById(?)',[PRODUCTO_ID]);  
        res.send(MOSTRAR_CODE_BAR);
    } catch (error) {
        res.status(404).json({message:error});
    }
}

module.exports = {buscarBarCode,buscarProductoPorBarCode,eliminarProductoPorBarCode,cambiarCodeBarPorId,buscarBarCodePorId};