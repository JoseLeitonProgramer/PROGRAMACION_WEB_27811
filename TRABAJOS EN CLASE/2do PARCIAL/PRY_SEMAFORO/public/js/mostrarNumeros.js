var btn_mostrar_numeros = document.getElementById('btn_mostrar_numeros');
var txt_mostrar_resultado = document.getElementById('txt_mostrar_resultado');
// btn_mostrar_numeros.textContent='NUMEROS'

btn_mostrar_numeros.addEventListener('click',() => {
    let numeros ="";
    for(let i = 1; i <= 10; i++){
        numeros += ` ${i} <br> `;
    }
    txt_mostrar_resultado.innerHTML=numeros;
})