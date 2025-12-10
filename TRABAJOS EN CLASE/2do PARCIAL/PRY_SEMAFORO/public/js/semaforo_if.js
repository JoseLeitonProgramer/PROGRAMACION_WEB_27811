var seleccionado = document.querySelectorAll('input[name="color"]');
var txt_resultado = document.getElementById('txt_resultado');

if (seleccionado) {
    txt_resultado.textContent = "PORFAVOR SELECCIONE OPCION";
}

seleccionado.forEach(radio => {
    radio.addEventListener('click', () => {
        let color = radio.value;
            if (color == 'rojo') {
                txt_resultado.textContent = 'DETENGASE 🔴!!!!';
            } else if (color == 'amarillo') {
                txt_resultado.textContent = 'PRECAUCION 🟡!!!!';
            } else if (color == 'verde') {
                txt_resultado.textContent = 'AVANCE 🟢!!!!';
            }
        
    });
});