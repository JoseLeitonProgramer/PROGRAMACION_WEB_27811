var btn_calcular = document.getElementById('btn_calcular');
var btn_limpiar = document.getElementById('btn_limpiar');


var txt_pares = document.getElementById('txt_pares');
var txt_impares = document.getElementById('txt_impares');

btn_calcular.addEventListener('click', () => {
    resultadosPares="";
    resultadosImpares=""
    var txt_numero = parseInt(document.getElementById('txt_numero').value)
    for (let index = 2; index <= txt_numero; index=index+2) {
        
        resultadosPares += index + "<br>"; 
    }
    txt_pares.innerHTML = resultadosPares;

    for (let index = 1; index <= txt_numero; index = index + 2) {

        resultadosImpares += index + "<br>";
    }
    txt_impares.innerHTML = resultadosImpares;
})

btn_limpiar.addEventListener('click', () => {
    
})







// btn_calcular.addEventListener('click', () => {
//     var txt_numero = parseInt(document.getElementById('txt_numero').value)
//     if (txt_numero) {
//         let resultados = "";
//         for (let index = 1; index <= 12; index++) {
//             resultados += txt_numero + "x" + index + "=" + txt_numero * index + '<br>';
//         }
//         txt_resultado.innerHTML = resultados;
//     } else {
//         txt_resultado.textContent = 'INGRESE NUMERO POR FAVOR'
//     }
// })

// btn_limpiar.addEventListener('click', () => {
//     document.getElementById('txt_numero').value = '';
//     txt_resultado.innerHTML = "";
// })