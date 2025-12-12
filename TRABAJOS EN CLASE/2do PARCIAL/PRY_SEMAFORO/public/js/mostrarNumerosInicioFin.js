var btn_calcular = document.getElementById('btn_calcular');
var txt_resultado = document.getElementById('txt_resultado');
var txt_numero_inicio = document.getElementById('txt_numero_inicio');
var txt_numero_fin = document.getElementById('txt_numero_fin');

btn_calcular.addEventListener('click', () => {
    var inicio = parseInt(txt_numero_inicio.value)
    var fin = parseInt(txt_numero_fin.value)
    let resultado = '';
    for (let i = inicio; i <= fin; i++) {
        resultado += i + "<br>" ;
    }
    txt_resultado.innerHTML = resultado;
})