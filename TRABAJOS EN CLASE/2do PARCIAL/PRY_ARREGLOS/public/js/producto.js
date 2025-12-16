var btn_agregar = document.getElementById('btn_agregar');
var arreglos_frutas = [];

btn_agregar.addEventListener('click',function(event){
    var nombre_producto = document.getElementById('txt_nombre_producto');
    var lista_productos = document.getElementById('lista_productos')
    if(nombre_producto.value!=''){
        var elementoLI = document.createElement('li');
        elementoLI.classList.add('list-group-item');
        elementoLI.textContent = nombre_producto.value;

        lista_productos.appendChild(elementoLI);
        arreglos_frutas.push(nombre_producto.value)
        nombre_producto.value = '';

    }else{
        console.log('PORFAVOR INGRESE UN PRODUCTO')
    }

    var productos_mayusculas = arreglos_frutas.map(function(producto){
        return producto.toUpperCase();
    })

    console.log(productos_mayusculas)

    var elementoLI2 = document.createElement('Li');
    elementoLI2.classList.add('list-group-item2');
    elementoLI2.textContent = nombre_producto.value;

    lista_productos.appendChild(elementoLI2);
    arreglos_frutas.push(nombre_producto.value)
    nombre_producto.value = '';
})