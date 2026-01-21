function conexionBaseDatos(usuario, password) {

    console.log('CONECTANDO A LA BASE');

    let promesaConexion = new Promise((resolve, reject) => {
        setTimeout(() => {

            const user = 'jileitmonster';
            const pass = 'jilh12345';

            if (usuario === user && password === pass) {
                resolve('CONEXION EXITOSA');
            } else {
                reject('ERROR, INTENTE NUEVAMENTE');
            }

        }, 3000);
    });

    promesaConexion
        .then(resultado => {
            console.log(resultado);
        })
        .catch(error => {
            console.log(error);
        })
        .finally(() => {
            console.log('FINALIZO EL PROCESO');
        });
}

conexionBaseDatos('jileitmonster', 'jilh12345');