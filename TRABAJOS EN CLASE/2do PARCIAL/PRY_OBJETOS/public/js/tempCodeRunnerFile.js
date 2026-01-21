async function conexionBaseDatos(usuario, password) {

    console.log('CONECTANDO A LA BASE');

    let promesaConexion = new Promise((resolve, reject) => {
        setTimeout(() => {

            const user = 'jileitmonster';
            const pass = 'jilh12345';

            if (usuario === user && password === pass) {
                resolve('CONEXION EXITOSA');
            } else {
                reject('ERROR, IMTENTE NUEVAMENTE');
            }
        }, 3000);
    });

    try {
        let resultado = await promesaConexion;
        console.log(resultado);
    } catch (error) {
        console.log(error);
    }

    console.log('FINALIZO EL PROCESO');
}
conexionBaseDatos('jileitmonster', 'jilh12345');