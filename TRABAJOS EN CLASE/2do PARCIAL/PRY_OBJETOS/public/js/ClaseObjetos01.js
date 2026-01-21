let miPromesa = new Promise((resolved, rejected)=>{
    let expresion = true;
    if(expresion)
        resolved('Se resolvio correctamente la promesa')
    else
        rejected('Ocurrio algún problema')
});

// miPromesa.then(
//     valor => console.log(valor),
//     error => console.log(error)
// );

miPromesa.then(
    valor => console.log(valor)
).catch(
    error => console.log(error)
).finally(
    final => console.log(final)
)

let promesa = new Promise((resolver) => {
    console.log('Antes de ejecutar la promesa');
    setTimeout(() => {
        resolver('Saludos con promesa y settimeout');
    },3000);
    console.log('Despues de ejecutar la promesa .... ')
});

//Realizar un ejercicio que genere un numero ramdom entre 0 y 10, cuando el nuim,ero sea menor o iguyal a 5 la promesa debe ser resuleta, caso contrario debe ser rechazada
//Independientemente del resultado de la promesa mostrar el mensaje "Promesa acabada o resuelta oara indicar que el proceso termino"

let promesaNumero = new Promise((resolver, rechazar) => {
    console.log('*** INICIANDO PROMESA ***');

    setTimeout(() => {
        let numero = Math.floor(Math.random() * 11); // 0 a 10
        console.log('NUMERO RANDOM:', numero);

        if (numero <= 5) {
            resolver('PROMESA RESUELTA');
        } else {
            rechazar('PROMESA RECHAZADA');
        }
    }, 3000);

    console.log('EN EJECUCIÓN ... ... .... ... ... ...');
});

promesaNumero
    .then(resultado => console.log(resultado))
    .catch(error => console.log(error))
    .finally(() => console.log('FINALIZO'));

// SIMULAR EL LANZAMIENTO DE UN DADO QUE GENERE UNNUMERO ALEATORIO ENTRE 1 Y 6, LA TAREA CONSISTE EN USAR UNA PROMESA PARA DETERMINAR SI EL NUMERO ES PAR O IMPAR
// LA PROMESA SE DEBE RESOLVER SI EL NUMERO ES PAR Y RECHZAR SI EL NUMERO ES IMPAR.

let promesaDado = new Promise((resolver, rechazar) => {
    console.log('*** INICIANDO PROMESA ***');

    setTimeout(() => {
        let dado = Math.floor(Math.random() * 6) + 1; // 1 a 6
        console.log('NUMERO DEL DADO:', dado);

        if (dado % 2 === 0) {
            resolver('PROMESA RESUELTA');
        } else {
            rechazar('PROMESA RECHAZADA');
        }
    }, 3000);

    console.log('EN EJECUCION ... ... ...');
});

promesaDado
    .then(respuesta => console.log(respuesta))
    .catch(error => console.log(error))
    .finally(() => console.log('FINALIZO'));

