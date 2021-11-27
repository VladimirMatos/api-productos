const app = require('./app');
require('dotenv').config();



//Api Connection
async function conexionServidor (){
  await app.listen(process.env.PORT);
  console.log('Server is running on port:', process.env.PORT);
}
conexionServidor();