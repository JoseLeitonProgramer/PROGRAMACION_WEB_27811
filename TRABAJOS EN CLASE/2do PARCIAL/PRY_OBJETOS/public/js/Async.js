async function miFuncionPromesa() {
    return 'Datos recibidos'
}

miFuncionPromesa().then(valor => console.log(valor));

//AWAIT

async function funcionPromesaAwait() {
    let miPromesa = new Promise(resolver => {
        resolver('Promesa con await')
    });
    console.log(await miPromesa);
}

funcionPromesaAwait();

//OTRO TIPO FUNCION

let funcionPromesaAwaitArrow = async () => {
    let miPromesa = new Promise(resolver => {
        resolver('Promesa con await')
    });
    console.log(await miPromesa);
}

funcionPromesaAwaitArrow();

//async await y timeout

async function funcionconSettimeout() {
    console.log('Proceso A');
    let miPromesa = new Promise(resolver => {
        setTimeout(()=>{
            resolver('Promesa con await y timeout');
        },5000)
        
    });
console.log(await miPromesa)
console.log('Proceso C')
}

// SIMULAR LA CONEXION A UNA BASE DE DATOS USUARIO Y CONTRASEÑA CARGAR DELEY DE 3 SEGUNDOS, INSTANCIADOS LOS DATOS USUARIO Y CONTRASEÑA Y CASO CONTRARIO MENSAJE DE ERROR COMO DATOS INCORRECTOS


async function validacionCredenciales(correo, contrasenia) {
    console.log('CONECTANDO A LA BASE DE DATOS')
    let conexion = new Promise((resolve, reject)=>{
        setTimeout(()=>{

        })
    })
}


////


// Simulación de conexión a una base de datos usando async / await

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