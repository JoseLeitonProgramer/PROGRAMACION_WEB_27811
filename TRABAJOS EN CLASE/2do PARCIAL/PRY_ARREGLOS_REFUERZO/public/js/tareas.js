// var nombre_tareas = [];
// var estado_tareas = [];

// var btn_guardar_tarea = document.getElementById('btn_guardar_tarea');

// btn_guardar_tarea.addEventListener('click',function(event){
//     let txt_nombre_tarea = document.getElementById('txt_nombre_tarea')
//     if(txt_nombre_tarea.value == ''){
//         console.log('DEBE INGRESAR UNA TAREA')
//         return
//     }

//     nombre_tareas.push(txt_nombre_tarea.value);
//     estado_tareas.push(false);
//     mostrarTareas();
//     txt_nombre_tarea.value="";
// });

// function mostrarTareas(){
//     var lista_tareas = document.getElementById('lista_tareas')
//     lista_tareas.innerHTML="";
//     nombre_tareas.forEach(function(tarea,posicion){

//         let element_li = document.createElement('li')
//         element_li.classList.add('list-group-item')


//         let element_input = document.createElement('input')

//         element_input.classList.add(['form-check-input','me-1'])
//         // element_input.classList.add('me-1')
//         element_input.type='checkbox'
//         // element_input.checked = true;

//         element_li.textContent = tarea;

//         element_li.appendChild(element_input);
//         lista_tareas.appendChild(element_li);

//         element_input.addEventListener('change',function(event){
//             if(element_input.checked){
//                 console.log('TAREA FINALIZADA')
//             }else{
//                 console.log('TAREA PENDIENTE ')
//             }
//         })

//         // btn_eliminar.addEventListener('click',function(event){
//         //     nombre_tareas.slice(posicion,1);
//         // })

//     })
// }


var nombre_tareas = [];
var estado_tareas = [];

var btn_guardar_tarea = document.getElementById('btn_guardar_tarea');

btn_guardar_tarea.addEventListener('click', function () {
    let txt_nombre_tarea = document.getElementById('txt_nombre_tarea');
    if (txt_nombre_tarea.value === '') {
        console.log('DEBE INGRESAR UNA TAREA');
        return;
    }

    nombre_tareas.push(txt_nombre_tarea.value);
    estado_tareas.push(false);
    mostrarTareas();
    txt_nombre_tarea.value = "";
});

function eliminarTarea(posicion) {
    console.log(posicion)
    nombre_tareas.splice(posicion, 1);
    estado_tareas.splice(posicion, 1);
    mostrarTareas();
}

function mostrarTareas() {
    var lista_tareas = document.getElementById('lista_tareas');
    lista_tareas.innerHTML = "";
    nombre_tareas.forEach(function (tarea, posicion) {

        let element_li = document.createElement('li');
        element_li.classList.add('list-group-item', 'd-flex', 'align-items-center', 'justify-content-between');
        
        let contenedor = document.createElement('div');

        let element_input = document.createElement('input');
        
        element_input.type = 'checkbox';
        element_input.classList.add('form-check-input', 'me-2');
        element_input.checked = estado_tareas[posicion];

        let Texto = document.createElement('span');
        Texto.textContent = tarea;

        contenedor.appendChild(element_input);
        contenedor.appendChild(Texto);

        let btn_eliminar = document.createElement('button');
        btn_eliminar.textContent = 'Eliminar';
        btn_eliminar.classList.add('btn', 'btn-danger', 'btn-sm');

        element_input.addEventListener('change', function () {
            estado_tareas[posicion] = element_input.checked;
        });

        btn_eliminar.addEventListener('click', function () {
            eliminarTarea(posicion);
            console.log(nombre_tareas)
        });

        element_li.appendChild(contenedor);
        element_li.appendChild(btn_eliminar);

        lista_tareas.appendChild(element_li);
    });
}
