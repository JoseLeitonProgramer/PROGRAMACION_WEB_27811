// DECLARAMOS EN VARIABLE EL BOTON Y HACEMOS EL LLAMADO
var btn_multiplicar = document.getElementById('btn_dividir');
// ACCEDEMOS AL EVENTO CLICK
btn_multiplicar.addEventListener('click',function(event){
    // CAPTURAMOS EL VALOR DE LAS ENTRADAS
    let n1 = document.getElementById('txt_numero_7').value;
    let n2 = document.getElementById('txt_numero_8').value;

    let txt_resultado_multiplicar = document.getElementById('txt_resultado_dividir');
    // innerHTML PARA MOSTRAR/ ACTUALIZAR EL RESULTADO
    txt_resultado_multiplicar.innerHTML = (parseFloat(n1) / parseFloat(n2)).toFixed(2);

});