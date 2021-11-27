const {promisify} =require('util');
const mysql = require('mysql');


const keyDataBase = {
    host: process.env.HOST,
    port: process.env.PORTDB,
    user: process.env.USERDB,
    password: process.env.PASSWORDDB,
    database: process.env.DATABASE,
    connectionLimit: process.env.ConecLimit
}

const conexionBaseDeDatos = mysql.createPool(keyDataBase);
conexionBaseDeDatos.getConnection((err,connection) =>{
    if(err){
        console.log('Error:' + err);
    }
    if(connection){
        connection.release();
        console.log('Base de datos conectada');
    }

    return
});

//Promisify conexion a query
conexionBaseDeDatos.query = promisify(conexionBaseDeDatos.query);
module.exports = conexionBaseDeDatos;

