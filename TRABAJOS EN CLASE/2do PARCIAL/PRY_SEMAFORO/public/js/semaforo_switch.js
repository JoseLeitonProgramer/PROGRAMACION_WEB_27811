// var seleccionado = document.querySelectorAll('input[name="color"]');
// var seleccionado_primero = document.querySelector('input[name="color"]:checked');
// var txt_resultado = document.getElementById('txt_resultado');


// if (!seleccionado_primero) {
//     txt_resultado.textContent = "POR FAVOR SELECCIONE OPCION";
// }else{
//     let color = seleccionado_primero.value;
//     switch (color) {
//         case 'rojo':
//             txt_resultado.textContent = 'DETENGASE 🔴!!!!';
//             break;
//         case 'amarillo':
//             txt_resultado.textContent = 'PRECAUCION 🟡!!!!';
//             break;
//         case 'verde':
//             txt_resultado.textContent = 'AVANCE 🟢!!!!';
//             break;
//         default:
//             txt_resultado.textContent = 'COLOR NO RECONOCIDO';
//     }
// }


// seleccionado.forEach(radio => {
//     radio.addEventListener('change', () => {
//         let color = radio.value;

//         switch (color) {
//             case 'rojo':
//                 txt_resultado.textContent = 'DETENGASE 🔴!!!!';
//                 break;
//             case 'amarillo':
//                 txt_resultado.textContent = 'PRECAUCION 🟡!!!!';
//                 break;
//             case 'verde':
//                 txt_resultado.textContent = 'AVANCE 🟢!!!!';
//                 break;
//             default:
//                 txt_resultado.textContent = 'COLOR NO RECONOCIDO';
//         }
//     });
// });


var seleccionado = document.querySelectorAll('input[name="color"]');
var seleccionado_primero = document.querySelector('input[name="color"]:checked');
var txt_resultado = document.getElementById('txt_resultado');

function mostrar(color) {
    switch (color) {
        case 'rojo': txt_resultado.textContent = 'DETENGASE 🔴!!!!'; break;
        case 'amarillo': txt_resultado.textContent = 'PRECAUCION 🟡!!!!'; break;
        case 'verde': txt_resultado.textContent = 'AVANCE 🟢!!!!'; break;
        default: txt_resultado.textContent = 'COLOR NO RECONOCIDO';
    }
}

if (!seleccionado_primero) txt_resultado.textContent = "POR FAVOR SELECCIONE OPCION";
else mostrar(seleccionado_primero.value);

seleccionado.forEach(radio => radio.addEventListener('change', () => mostrar(radio.value)));
