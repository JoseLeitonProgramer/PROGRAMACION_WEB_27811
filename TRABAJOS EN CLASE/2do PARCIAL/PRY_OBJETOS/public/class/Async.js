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







































// SIN UTILIZAR TRYU Y CATCH




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


///

// FETCH API ==> Uso de Promesas

fetch('https://api.com.ec')//URL DE LA API
    .then(response => response.json()) // convertir la rpuesta eque se obtiene del servidor
    .then(data => console.log(data)) // mostrar los datos en consola
    .catch(error => console.error('Error:',error));// manejo de eerrores

    // fetch retorna una promesa
    // para leer el cuerpo de una determinada respuesta=

    // METODOS CONOCIDOS

async function fetchData() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/photos');
        if (!response.ok) {
            throw new error(`HTTP Error status: ${response.status}`)
        } 
        const data = await response.json()
        console.log(data)
    } catch (error) {
        console.error('Fetch error: ',error);
    }
}

fetchData();



// otro ejercicio


const BASE_URL2 = 'https://api.escuelajs.co/api/v1';
async function getUsers() {
    try {
        const response = await fetch(`${BASE_URL2}/users`);
        if (!response.ok) {
            throw new error(`HTTP Error status: ${response.status}`)
        } 
        const users = await response.json()
        console.log('Usuarios:',users)
        return users;
    } catch (error) {
        console.error('Fetch error: ', error);
    }
}

getUsers();

// otro ejercicio

const BASE_URL = 'https://jsonplaceholder.typicode.com/';
async function createPost(title,body,userId=1){
    try {
        const newPost = (title, body, userId)
        const response = await fetch(`${BASE_URL}/posts`,{
            method: 'POST',
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify(newPost)
        });

        if (!response.ok) {
            throw new error(`HTTP Error status: ${response.status}`)
        }
        
        const createdPost = await response.json()
        console.log('Post creado exitosamente:', createdPost)
        return createdPost;
        
    } catch (error) {
        console.error('Fetch error: ', error.message);
    }
}

createPost('Post actualizado','Este fue creado',1);



/// EJERCICIO EN CLASE


const BASE_URL3 = 'https://api.escuelajs.co/api/v1';


async function createCategory(name, image) {
    try {

        const newCategory = {
            name: name,
            image: image
        };

        const response = await fetch(`${BASE_URL3}/categories/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newCategory)
        });

        if (!response.ok) {
            throw new Error(`HTTP Error status: ${response.status}`);
        }

        const createdCategory = await response.json();
        console.log('Categoría creada exitosamente:', createdCategory);
        return createdCategory;

    } catch (error) {
        console.error('Fetch error:', error.message);
    }
}
createCategory('BASES', 'https://placeimg.com/640/480/any');



// ACTUALIZAR UN REGISTRO COMPLETO (EXISTENTE) QUE REEMPLAZARA TODOS LOS CAMPOS

async function updatePosts(id,title,body,userId) {
    try {
        const updateData = (id,title,body,userId);
        const response = await fetch(`${BASE_URL}/posts/${id}`,{
        method: 'PUT',
        headers: {
            'Content-Type':'application/json'
        },
        body: JSON.stringify(updateData)
        });

        if(response.ok){
            throw new error(`HTTP Error status: ${response.status}`);
        }

    } catch (error) {
        
    }
}