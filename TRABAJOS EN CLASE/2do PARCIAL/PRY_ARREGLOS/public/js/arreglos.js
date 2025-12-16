var frutas = ['UVA','manzana','PERA','kiwi'];
// console.log(frutas);
// console.log(frutas[1]);
// frutas.push('BANANA');
// console.log(frutas);
// frutas.pop();
// console.log(frutas);
// frutas.unshift('BANANA');
// console.log(frutas);
// frutas.shift();
// console.log(frutas);
// // SABER TAMANIO ARREGLO

// let tamanio_arreglo_frutas = frutas.length;
// console.log(tamanio_arreglo_frutas);

var frutas_forEach = frutas.forEach(function(fruta){//permite iterar pero no modificar
    return fruta.toUpperCase();
});

console.log('=======================')

var frutas_map = frutas.map(function(fruta){//permite modificar sus valores
    return fruta.toUpperCase();
});

console.log(frutas_forEach);
console.log(frutas_map);


