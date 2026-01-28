// let persona1 = {
//     nombre: 'jose',
//     apellido: 'leiton',
//     edad: 25,
//     email: 'jileit@hotmail.com',
// }

// console.log('persona');

// let persona2 = {
//     nombre: 'jose',
//     apellido: 'leiton',
//     edad: 25,
//     email: 'jileit@hotmail.com',
//     nombreCompleto: function(){
//         return this.nombre + '' + this.apellido;
//     }
// }

// console.log(persona2.nombreCompleto());

// const persona3 = {
//     nombre: 'JOSE',
//     edad: 25,
//     saludar: function(){
//         console.log(`HOLA ME LLAMO, $(this.nombre)`)
//     }
// }

// console.log(persona3.nombre);
// persona3.saludar();

// const vehiculo = new Object();
// vehiculo.marca = 'toyota';
// vehiculo.modelo = 'hyundai';
// vehiculo.arrancar = function(){
//     console.log(`ESTOY ARRANCANDO y mi marca es ${this.marca}`)
// }

// console.log(vehiculo.marca);
// vehiculo.arrancar();

// const prototipoPersona = {
//     saludar: function(){
//         console.log('Hola, me llamo ${this.nombre}')
//     }
// }

// const persona = Object.create(prototipoPersona)
// persona.nombre = 'Luis'
// persona.saludar();

// // utilizando clases
// // proporciona una sintaxis mas estructurada para crear objetos

// class Persona {
//     constructor(nombre,edad){
//         this.nombre = nombre;
//         this.edad = edad;
//     }
//     saludar(){
//         console.log(`HOLA ME LLAMO ${this.nombre}`)
//     }
// }

// const persona = new Persona('Ana',32)

// persona.saludar();

// CREAR OBJETOS UTILIZANDO FUNCIONES CONSTRUCTORAS

// function Persona(nombre,edad){
//     this.nombre = nombre;
//     this.edad = edad;
//     this.saludar = function(){
//         console.log(`HOLA ME LLAMO ${this.nombre}`)
//     }
// }

// const persona = new Persona('JOSE',23);
// persona.saludar();

// // MANIPULAR LOS OBJETOS

// let persona1 = {
//     nombre: 'jose',
//     apellido: 'leiton',
//     edad: 25,
//     email: 'jileit@hotmail.com',
// }

// const persona = { nombre: 'PEDRO' };


// console.log('nombre' in persona);
// console.log(persona.hasOwnProperty('edad'));

// console.log(Object.keys(persona));
// console.log(Object.values(persona));
// console.log(Object.entries(persona));

// const copiaPersona = Object.assign({}, persona);
// console.log(copiaPersona);

// Inmutar el añadir, crear o modificar propiedades de un objeto

// Object.freeze(persona);


// //Object.seal
// //Permite modificar propiedades existentes, pero no agregar o eliminar propiedades;

// Object.seal(persona);



// let vehiculo = {
//     modelo = '';
// }

// const vehiculo = new Object();
// vehiculo.marca = 'toyota';
// vehiculo.modelo = 'hyundai';
// vehiculo.numeroChasis = 12345;
// vehiculo.anioFabricacion = '2004'
// vehiculo.color = 'azul'
// vehiculo.arrancar = function(){
//     console.log(`ESTOY ARRANCANDO y mi marca es ${this.marca}`)
// }


// // Crera un objeto Vehicular con al menos 5 propiedades y que hay como agregar las propiedades de forma dinamica con un ciclo una de las propiedades debe ser exonerada si es mayor al año 2027 el campo exonerado debe colocarse si caso contrario no la propiedades de forma dinamica



function crearVehiculo(marca, modelo, anio, color, precio) {
    const vehiculo = new Object();

    vehiculo.marca = marca;
    vehiculo.modelo = modelo;
    vehiculo.anio = anio;
    vehiculo.color = color;
    vehiculo.precio = precio;

    if (vehiculo.anio > 2027) {
        vehiculo.exonerado = true;
    }

    return vehiculo;
}

const vehiculo1 = crearVehiculo('Toyota', 'Corolla', 2028, 'Blanco', 18000);
const vehiculo2 = crearVehiculo('Hyundai', 'Accent', 2025, 'Rojo', 15000);
const vehiculo3 = crearVehiculo('Kia', 'Sportage', 2030, 'Negro', 25000);

console.log(vehiculo1);
console.log(vehiculo2);
console.log(vehiculo3);


// CONSTRUCTORES
// SIRVE PARA CREAR MAS OBJETOS DEL ,MISMO TIPO

function Persona(nombre, apellido, edad){
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
};

let padre = new Persona('JOSE','LEITON',25);
console.log(padre)

// Uso de prototype

Persona.prototype.tel = '0979357401';

console.log(padre.tel);

// CALL = permite invocar una funcion con contexto

function saludar()





const persona1 = {
    nombre: "Jose",
    apellido: "Leiton",
    nombreCompleto: function () {
        console.log(`HOLA SOY ${this.nombre}`);
    }
};

const persona2 = {
    edad: 25,
    ciudad: "Quito"
};

// persona2.nombre = persona1.nombre;
// persona2.apellido = persona1.apellido;
// persona2.nombreCompleto = persona1.nombreCompleto;

console.log(persona1.nombreCompleto.call(persona2));

console.log(persona2);


const persona1 = {
    nombre: "Jose",
    apellido: "Leiton",
    nombreCompleto: function () {
        console.log(`HOLA SOY ${this.nombre} ${this.apellido}`);
    }
};

const persona2 = {
    nombre: "Maria",
    apellido: "Perez",
    edad: 25,
    ciudad: "Quito"
};

persona1.nombreCompleto.call(persona2);

// FUNCIONES CALLBACK

function imprimir(mensaje) {
    console.log(mensaje)
}

function sumar(n1,n2, funcionCallback) {
    let res = n1 + n2;
    funcionCallback(`RESULTADO: ${res}`)
}

sumar(5,3,imprimir)

// NIVEL DE BDD

const getUsers = (callback) => {
    setTimeout(()=>{
        const users = [
            {id : 1, name : 'pepe'},
            {id : 2, name : 'pepe'},
            {id : 3, name : 'pepe'}
        ];
        callback(users);
    },1000);
}

getUsers((users) => {
    console.log("Users:",users);
})

// CREAR FUNCION UNA NUEVA INSTANCIA DE PROPIEDADES DE UN PRODUCTO ID NOMBRE STOCK DESCRIPCION VALOR, CALL BACK -> SI EL STOCK DEL PRODUCTO CASMBIA EL PRECIO CAMBIA ES DE CIR SI LLEGA A CERO EL VALOR CAMBIA A CERO E INVENTARIO ACTUALIZADO si el stock es cero el precio es cero

const getProducto = (callback) => {
    setTimeout(() => {
        let producto = [
            {
                id: 1,
                nombre: 'Casco',
                stock: 1,
                descripcion: 'Casco de seguridad',
                valor: 12
            },
            
            {
                id: 2,
                nombre: 'Casco2',
                stock: 2,
                descripcion: 'Casco de seguridad',
                valor: 12
            },

            {
                id: 3,
                nombre: 'Casco3',
                stock: 0,
                descripcion: 'Casco de seguridad',
                valor: 12
            }

        ]
        
        if (producto.stock === 0) {
            producto.valor = 0;
        }

        callback(producto);
    }, 1000);
};

getProducto((producto) => {
    console.log("Producto:", producto);

    if (producto.stock === 0) {
        console.log("STOCK AGOTADO");
    } else {
        console.log("STOCK DISPONIBLE");
    }
});
//kjashdkjashdkjashdkjhasd



const getProducto = (callback) => {
    setTimeout(() => {
        let productos = [
            {
                id: 1,
                nombre: 'Casco',
                stock: 0,
                descripcion: 'Casco de seguridad',
                valor: 12
            },
            {
                id: 2,
                nombre: 'Casco2',
                stock: 2,
                descripcion: 'Casco de seguridad',
                valor: 12
            },
            {
                id: 3,
                nombre: 'Casco3',
                stock: 1,
                descripcion: 'Casco de seguridad',
                valor: 12
            }
        ];

        productos.forEach(p => {
            if (p.stock === 0) {
                p.valor = 0;
            }
        });

        callback(productos);
    }, 8000);
};

getProducto((productos) => {
    console.log("Productos:", productos);

    productos.forEach(p => {
        if (p.stock === 0) {
            console.log(p.nombre + ": STOCK AGOTADO");
        } else {
            console.log(p.nombre + ": STOCK DISPONIBLE");
        }
    });
});









array.forEach(element => {
    
});