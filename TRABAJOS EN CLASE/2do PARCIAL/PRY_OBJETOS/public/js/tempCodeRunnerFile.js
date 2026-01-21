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