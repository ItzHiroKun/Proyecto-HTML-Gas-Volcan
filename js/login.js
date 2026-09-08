/* ===========================================================
login.js
Valida el formulario de login contra los usuarios guardados
en LocalStorage (clave "usuariosGas", generada en registro.js).
=========================================================== */

const CLAVE_USUARIOS_LOGIN = "usuariosGas";
const CLAVE_SESION = "sesionActivaGas";

const formLogin = document.getElementById("form-login");
const mensajeErrorGeneral = document.getElementById("mensaje-error-general");
const mensajeExitoLogin = document.getElementById("mensaje-exito-login");

function obtenerUsuariosRegistrados() {
    const datos = localStorage.getItem(CLAVE_USUARIOS_LOGIN);
    return datos ? JSON.parse(datos) : [];
}

formLogin.addEventListener("submit", function (evento) {
    evento.preventDefault();
    
    mensajeErrorGeneral.classList.add("d-none");
    mensajeExitoLogin.classList.add("d-none");
    
    const correo = document.getElementById("correoLogin").value;
    const contrasena = document.getElementById("contrasenaLogin").value;
    
    let formularioValido = true;
    
    if (!esCorreoValido(correo)) {
        mostrarError("correoLogin", "Ingresa un correo con formato válido.");
        formularioValido = false;
    } else {
        ocultarError("correoLogin");
    }
    
    if (!noEstaVacio(contrasena)) {
        mostrarError("contrasenaLogin", "Ingresa tu contraseña.");
        formularioValido = false;
    } else {
        ocultarError("contrasenaLogin");
    }
    
    if (!formularioValido) return;
    
    const usuarios = obtenerUsuariosRegistrados();
    const usuarioEncontrado = usuarios.find(function (u) {
        return u.correo.toLowerCase() === correo.toLowerCase();
    });
    
    if (!usuarioEncontrado) {
        mensajeErrorGeneral.textContent = "No existe una cuenta registrada con ese correo.";
        mensajeErrorGeneral.classList.remove("d-none");
        return;
    }
    
    if (usuarioEncontrado.contrasena !== contrasena) {
        mensajeErrorGeneral.textContent = "La contraseña ingresada es incorrecta.";
        mensajeErrorGeneral.classList.remove("d-none");
        return;
    }
    
    // Credenciales correctas: guardamos la sesión y avisamos
    localStorage.setItem(CLAVE_SESION, JSON.stringify({
        correo: usuarioEncontrado.correo,
        nombres: usuarioEncontrado.nombres,
        tipoUsuario: usuarioEncontrado.tipoUsuario
    }));
    
    mensajeExitoLogin.textContent = "¡Bienvenido/a, " + usuarioEncontrado.nombres + "! Redirigiendo...";
    mensajeExitoLogin.classList.remove("d-none");
    
    setTimeout(function () {
        window.location.href = "index.html";
    }, 1200);
});
