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

























var nombre_tareas = [];
var estado_tareas = [];

var btn_guardar_tarea = document.getElementById('btn_guardar_tarea');

btn_guardar_tarea.addEventListener('click',function(event){
    let txt_nombre_tarea = document.getElementById('txt_nombre_tarea')
    if(txt_nombre_tarea.value == ''){
        console.log('DEBE INGRESAR UNA TAREA')
        return
    }

    nombre_tareas.push(txt_nombre_tarea.value);
    estado_tareas.push(false);
    mostrarTareas();
    txt_nombre_tarea.value="";
});

function mostrarTareas(){
    var lista_tareas = document.getElementById('lista_tareas')
    lista_tareas.innerHTML="";
    nombre_tareas.forEach(function(tarea,posicion){

        let element_li = document.createElement('li')
        element_li.classList.add('list-group-item')


        let element_input = document.createElement('input')

        element_input.classList.add(['form-check-input','me-1'])
        // element_input.classList.add('me-1')
        element_input.type='checkbox'
        // element_input.checked = true;

        element_li.textContent = tarea;

        element_li.appendChild(element_input);
        lista_tareas.appendChild(element_li);

        element_input.addEventListener('change',function(event){
            if(element_input.checked){
                console.log('TAREA FINALIZADA')
            }else{
                console.log('TAREA PENDIENTE ')
            }
        })

        // btn_eliminar.addEventListener('click',function(event){
        //     nombre_tareas.slice(posicion,1);
        // })

    })
}