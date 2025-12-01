// DECLARAMOS EN VARIABLE EL BOTON Y HACEMOS EL LLAMADO
var btn_sumar = document.getElementById('btn_sumar');
// ACCEDEMOS AL EVENTO CLICK
btn_sumar.addEventListener('click',function(event){
    // CAPTURAMOS EL VALOR DE LAS ENTRADAS
    let n1 = document.getElementById('txt_numero_1').value;

    let txt_resultado_suma = document.getElementById('txt_resultado_suma');
    let txt_resultado_suma2 = document.getElementById('txt_resultado_suma2');

    // innerHTML PARA MOSTRAR/ ACTUALIZAR EL RESULTADO
    txt_resultado_suma.innerHTML = (((parseFloat(n1))*(9/5))+32).toFixed(2);
    txt_resultado_suma2.innerHTML = ((parseFloat(txt_resultado_suma.innerHTML) - 32) * (5/9)).toFixed(2);
});