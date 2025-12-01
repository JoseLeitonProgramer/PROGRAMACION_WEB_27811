// DECLARAMOS EN VARIABLE EL BOTON Y HACEMOS EL LLAMADO
var btn_restar = document.getElementById('btn_restar');
// ACCEDEMOS AL EVENTO CLICK
btn_restar.addEventListener('click',function(event){
    // CAPTURAMOS EL VALOR DE LAS ENTRADAS
    let n1 = document.getElementById('txt_numero_3').value;
    let n2 = document.getElementById('txt_numero_4').value;

    let txt_resultado_restar = document.getElementById('txt_resultado_restar');
    // innerHTML PARA MOSTRAR/ ACTUALIZAR EL RESULTADO
    txt_resultado_restar.innerHTML = (parseFloat(n1) - parseFloat(n2)).toFixed(2);

});