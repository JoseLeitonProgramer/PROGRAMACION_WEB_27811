var btn_agregar = document.getElementById("btn_agregar");

var arreglo_productos = [];

btn_agregar.addEventListener("click", function () {
    var nombre_producto = document.getElementById("Id1");
    var lista_productos = document.getElementById("lista_productos");

    if (nombre_producto.value != "") {
        var elemento = document.createElement("li");
        elemento.className = "list-group-item";
        elemento.textContent = nombre_producto.value;

        lista_productos.appendChild(elemento);
        arreglo_productos.push(nombre_producto.value);
        nombre_producto.value = "";
        console.log(arreglo_productos);

    } else {
        console.log("INGRESE UN PRODUCTO")
    }

    var producto_mayusculas = arreglo_productos.map(function (producto) {
        return producto.toUpperCase();
    });

    var lista_productos_mayusculas = document.getElementById("lista_productos_mayusculas");
    lista_productos_mayusculas.innerHTML = "";
    producto_mayusculas.forEach(function (producto) {
        var elemento = document.createElement("li");
        elemento.className = "list-group-item";
        elemento.textContent = producto;
        lista_productos_mayusculas.appendChild(elemento);
    });

});