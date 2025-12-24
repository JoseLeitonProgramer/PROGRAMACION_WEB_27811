// declarar objeto
var persona = {
    nombres: "JOE IGNACIO",
    apellidos: "LEIN HARO",
    edad: 15,
    es_estudiante: false,
    estatura: 1.33
};

var datos_persona = document.getElementById('datos_persona');

function mostrarPersona() {
    datos_persona.innerHTML = `
        LA PERSONA SE LLAMA: <br>
        ${persona.nombres} <br>
        SUS APELLIDOS SON: <br>
        ${persona.apellidos} <br>
        SU EDAD ES: <br>
        ${persona.edad} <br>
        MENCIONA QUE <br>
        ${persona.es_estudiante ? 'SI' : 'NO'} ES ESTUDIANTE: <br>
        Y SU ESTATURA ES <br>
        ${persona.estatura} <br>
    `;
}

mostrarPersona();


var txt_nombres = document.getElementById('txt_nombres');
txt_nombres.value = persona.nombres;

var txt_apellidos = document.getElementById('txt_apellidos');
txt_apellidos.value = persona.apellidos;

var txt_edad = document.getElementById('txt_edad');
txt_edad.value = persona.edad;

var txt_estatura = document.getElementById('txt_estatura');
txt_estatura.value = persona.estatura;

var sel_es_estudiante = document.getElementById('sel_es_estudiante');
sel_es_estudiante.value = persona.es_estudiante ? 'SI' : 'NO';

var txt_mayor = document.getElementById('txt_mayor');
txt_mayor.checked = persona.edad >= 18;

var btn_actualizar = document.getElementById('btn_actualizar');

btn_actualizar.addEventListener('click', function () {

    persona.nombres = txt_nombres.value;
    persona.apellidos = txt_apellidos.value;
    persona.edad = Number(txt_edad.value);
    persona.estatura = Number(txt_estatura.value);
    persona.es_estudiante = sel_es_estudiante.value === 'SI';

    txt_mayor.checked = persona.edad >= 18;

    mostrarPersona();
    
});
