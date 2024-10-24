document.getElementById('inscripcionForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const inputs = document.querySelectorAll('input, select');
    inputs.forEach(input => input.classList.remove('error'));
    limpiarErrores();

    const nombre = document.getElementById('nombre').value.trim();
    const edad = document.getElementById('edad').value;
    const email = document.getElementById('email').value.trim();


    let valid = true;

    if (!comprobarNombre(nombre)) valid = false;
    if (!comprobarEdad(edad)) valid = false;
    if (!comprobarEmail(email)) valid = false;

    if (!valid) return;


    document.getElementById('inscripcionForm').reset();


    const feedbackDatos = document.getElementById('feedbackDatos');
    feedbackDatos.innerHTML = `
        <strong>Nombre:</strong> ${nombre}<br>
        <strong>Edad:</strong> ${edad}<br>
        <strong>Correo electrónico:</strong> ${email !== '' ? email : 'No proporcionado'}<br>
    `;
});

function comprobarNombre(nombre) {
    const errorNombre = document.getElementById('errorNombre');
    if (nombre === '' || nombre.length > 50) {
        errorNombre.textContent = 'El nombre es obligatorio y tiene límite de 50 caracteres.';
        document.getElementById('nombre').classList.add('error');
        return false;
    }
    return true;
}

function comprobarEdad(edad) {
    const errorEdad = document.getElementById('errorEdad');
    if (edad === '' || edad < 10) {
        errorEdad.textContent = 'La edad es obligatoria y debe ser mayor o igual a 10.';
        document.getElementById('edad').classList.add('error');
        return false;
    }
    return true;
}

function comprobarEmail(email) {
    const errorEmail = document.getElementById('errorEmail');
const re = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/; 

if (email === '') {
errorEmail.textContent = 'El correo electrónico es obligatorio.';
document.getElementById('email').classList.add('error');
return false;
}

if (!re.test(email)) {
errorEmail.textContent = 'El formato del correo electrónico no es válido.';
document.getElementById('email').classList.add('error');
return false;
}

return true;
}


function limpiarErrores() {
    document.querySelectorAll('.error-message').forEach(error => {
        error.textContent = '';
    });
}
