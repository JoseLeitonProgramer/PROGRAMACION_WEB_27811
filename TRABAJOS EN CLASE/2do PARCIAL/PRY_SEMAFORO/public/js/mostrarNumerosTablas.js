var btn_calcular = document.getElementById('btn_calcular');
var txt_resultado = document.getElementById('txt_resultado');
var btn_limpiar = document.getElementById('btn_limpiar');
btn_calcular.addEventListener('click', () => {
    var txt_numero = parseInt(document.getElementById('txt_numero').value)
    if(txt_numero){
        let resultados = "";
        for (let index = 1; index <= 12; index++) {
            resultados += txt_numero + "x" + index + "=" + txt_numero * index + '<br>';
        }
        txt_resultado.innerHTML = resultados;
    }else{
        txt_resultado.textContent = 'INGRESE NUMERO POR FAVOR'
    }
})

btn_limpiar.addEventListener('click', () => {
    document.getElementById('txt_numero').value='';
    txt_resultado.innerHTML = "";
})