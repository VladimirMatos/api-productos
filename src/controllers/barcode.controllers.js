const generadorDeCodigoDeBarra = () =>{
    const minimo =1000000000000;
    const maximo = 9000000000000;
    return Math.floor(minimo + Math.random() * maximo);
};


module.exports = generadorDeCodigoDeBarra();