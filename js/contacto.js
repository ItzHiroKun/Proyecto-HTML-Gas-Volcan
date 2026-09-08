/* ===========================================================
contacto.js
Validaciones del formulario de contacto. No hay backend:
solo valida y muestra un mensaje de confirmación.
=========================================================== */

const formContacto = document.getElementById("form-contacto");

formContacto.addEventListener("submit", function (evento) {
    evento.preventDefault();
    
    const nombre = document.getElementById("nombreContacto").value;
    const correo = document.getElementById("correoContacto").value;
    const asunto = document.getElementById("asuntoContacto").value;
    const mensaje = document.getElementById("mensajeContacto").value;
    
    let formularioValido = true;
    
    if (!noEstaVacio(nombre)) {
        mostrarError("nombreContacto", "Ingresa tu nombre.");
        formularioValido = false;
    } else {
        ocultarError("nombreContacto");
    }
    
    if (!esCorreoValido(correo)) {
        mostrarError("correoContacto", "Ingresa un correo con formato válido.");
        formularioValido = false;
    } else {
        ocultarError("correoContacto");
    }
    
    if (!noEstaVacio(asunto)) {
        mostrarError("asuntoContacto", "Selecciona un asunto.");
        formularioValido = false;
    } else {
        ocultarError("asuntoContacto");
    }
    
    if (!tieneLargoMinimo(mensaje, 15)) {
        mostrarError("mensajeContacto", "Tu mensaje debe tener al menos 15 caracteres.");
        formularioValido = false;
    } else {
        ocultarError("mensajeContacto");
    }
    
    if (!formularioValido) return;
    
    document.getElementById("mensaje-exito-contacto").classList.remove("d-none");
    formContacto.reset();
});
