const vehiculo = new Object();
vehiculo.marca = 'toyota';
vehiculo.modelo = 'hyundai';
vehiculo.arrancar = function(){
    console.log(`ESTOY ARRANCANDO y mi marca es ${this.marca}`)
}