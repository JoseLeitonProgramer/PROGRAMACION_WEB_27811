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

let persona1 = {
    nombre: 'jose',
    apellido: 'leiton',
    edad: 25,
    email: 'jileit@hotmail.com',
}

const persona = { nombre: 'PEDRO' };


console.log('nombre' in persona);
console.log(persona.hasOwnProperty('edad'));

console.log(Object.keys(persona));
console.log(Object.values(persona));
console.log(Object.entries(persona));

const copiaPersona = Object.assign({}, persona);
console.log(copiaPersona);

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

    const extras = {
        placa: 'ABC-123',
        combustible: 'Gasolina'
    };

    for (let propiedad in extras) {
        vehiculo[propiedad] = extras[propiedad];
    }

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
