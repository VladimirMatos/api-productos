const CONEXION_BASE_DE_DATOS = require('../database/database');

//Buscar todos los productos
const buscarProducto = async(req ,res) =>{
;
    try {
        const BUSCAR_PRODUCTO = await CONEXION_BASE_DE_DATOS.query('CALL sp_GetProducts()');
        res.send(BUSCAR_PRODUCTO);
    } catch (error) {
        res.status(422).json({message: error});
    }
};


//Buscar producto por id
const buscarProductoPorId = async (req,res) =>{
    try {
        const ID_PARAMETRO = req.params.id;
        const BUSCAR_PRODUCTO_POR_ID = await CONEXION_BASE_DE_DATOS.query('CALL sp_GetProductsById(?)', [ID_PARAMETRO]);
        res.send(BUSCAR_PRODUCTO_POR_ID);
    } catch (error) {
        res.status(422).json({message: error});
    }
};

//Crear un nuevo producto
const crearProducto = async(req,res) => {
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
};

//Eliminar un producto por id
const eliminarProductoPorId = async(req,res) =>{
    try {
        const ID_PARAMETRO = req.params.id;
        await CONEXION_BASE_DE_DATOS.query('CALL sp_DeleteByID(?)', [ID_PARAMETRO]);
        res.status(200).json({message:'Producto eliminado'});
    } catch (error) {
        res.status(422).json({message: error});
    }
};

//Editar un producto por id
const editarProductoPorId = async(req,res) =>{
    
    try {
        const ID_PARAMETRO = req.params.id;
        const {nombre,categoria,precio} = req.body;
        const nuevoBarCode ={
            nombre,
            categoria,
            precio
        }
        console.log(nuevoBarCode);
        console.log(ID_PARAMETRO);
        await CONEXION_BASE_DE_DATOS.query('UPDATE producto SET ? where id_producto = ?', [nuevoBarCode, ID_PARAMETRO]);
        //await CONEXION_BASE_DE_DATOS.query('UPDATE barcode SET numbarcode = ' + numbarcode + " where id_producto =" + ID_PARAMETRO);
    } catch (error) {
        console.log(error);
        res.status(422).json({message: error});
    }
}

//Editar un producto por id

module.exports = {buscarProducto,buscarProducto,buscarProductoPorId,crearProducto,eliminarProductoPorId,editarProductoPorId};