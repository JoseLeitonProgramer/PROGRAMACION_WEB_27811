const BASE_URL = 'https://fakestoreapi.com/users';
const tabla = document.getElementById('tablaUsuarios');

let usuariosLocal = []; // 🔥 memoria local

function renderTabla() {
    tabla.innerHTML = '';

    usuariosLocal.forEach(user => {
        tabla.innerHTML += `
            <tr>
                <td>${user.id}</td>
                <td>${user.username}</td>
                <td>${user.email}</td>
            </tr>
        `;
    });
}

function obtenerUsuarios() {
    fetch(BASE_URL)
        .then(res => res.json())
        .then(data => {
            usuariosLocal = data;
            renderTabla();
            Swal.fire('Usuarios cargados', '', 'success');
        })
        .catch(() => {
            Swal.fire('Error al cargar usuarios', '', 'error');
        });
}

function crearUsuario() {
    const nuevoUsuario = {
        id: usuariosLocal.length + 1, // ID simulado
        username: document.getElementById('txt_username').value,
        email: document.getElementById('txt_email').value,
        password: document.getElementById('txt_password').value
    };

    fetch(BASE_URL, {
        method: 'POST',
        body: JSON.stringify(nuevoUsuario),
        headers: { 'Content-Type': 'application/json' }
    })
        .then(() => {
            usuariosLocal.push(nuevoUsuario); // 🔥 se guarda local
            renderTabla();
            Swal.fire('Usuario creado', '', 'success');
        })
        .catch(() => {
            Swal.fire('Error al crear', '', 'error');
        });
}

function actualizarUsuario() {
    Swal.fire({
        title: 'ID del usuario',
        input: 'number',
        showCancelButton: true
    }).then(result => {
        if (result.isConfirmed) {

            const index = usuariosLocal.findIndex(u => u.id == result.value);

            if (index === -1) {
                Swal.fire('Usuario no encontrado', '', 'error');
                return;
            }

            usuariosLocal[index].username = document.getElementById('txt_username').value;
            usuariosLocal[index].email = document.getElementById('txt_email').value;

            fetch(`${BASE_URL}/${result.value}`, { method: 'PUT' })
                .then(() => {
                    renderTabla();
                    Swal.fire('Usuario actualizado', '', 'success');
                });
        }
    });
}

function eliminarUsuario() {
    Swal.fire({
        title: 'ID del usuario',
        input: 'number',
        showCancelButton: true,
        confirmButtonText: 'Eliminar'
    }).then(result => {
        if (result.isConfirmed) {

            usuariosLocal = usuariosLocal.filter(u => u.id != result.value);

            fetch(`${BASE_URL}/${result.value}`, { method: 'DELETE' })
                .then(() => {
                    renderTabla();
                    Swal.fire('Usuario eliminado', '', 'success');
                });
        }
    });
}
