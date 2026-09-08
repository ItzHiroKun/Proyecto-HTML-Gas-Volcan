/* ===========================================================
registro.js
Valida el formulario de registro y guarda el nuevo usuario
en LocalStorage bajo la clave "usuariosGas".
=========================================================== */

const CLAVE_USUARIOS = "usuariosGas";

const formRegistro = document.getElementById("form-registro");
const selectRegion = document.getElementById("region");
const selectComuna = document.getElementById("comuna");

// Carga las regiones al iniciar y conecta el cambio de región -> comunas
llenarSelectRegiones(selectRegion);
selectRegion.addEventListener("change", function () {
    llenarComunasSegunRegion(selectRegion, selectComuna);
    ocultarError("comuna");
});

// Devuelve el arreglo de usuarios registrados
function obtenerUsuarios() {
    const datos = localStorage.getItem(CLAVE_USUARIOS);
    return datos ? JSON.parse(datos) : [];
}

// Guarda el arreglo completo de usuarios
function guardarUsuarios(usuarios) {
    localStorage.setItem(CLAVE_USUARIOS, JSON.stringify(usuarios));
}

formRegistro.addEventListener("submit", function (evento) {
    evento.preventDefault();
    
    const nombres = document.getElementById("nombres").value;
    const apellidos = document.getElementById("apellidos").value;
    const run = document.getElementById("run").value;
    const telefono = document.getElementById("telefono").value;
    const correo = document.getElementById("correo").value;
    const region = selectRegion.value;
    const comuna = selectComuna.value;
    const direccion = document.getElementById("direccion").value;
    const contrasena = document.getElementById("contrasena").value;
    const confirmarContrasena = document.getElementById("confirmarContrasena").value;
    
    let formularioValido = true;
    
    // Nombres y apellidos: no vacíos
    if (!noEstaVacio(nombres)) {
        mostrarError("nombres", "Ingresa tu nombre.");
        formularioValido = false;
    } else {
        ocultarError("nombres");
    }
    
    if (!noEstaVacio(apellidos)) {
        mostrarError("apellidos", "Ingresa tu apellido.");
        formularioValido = false;
    } else {
        ocultarError("apellidos");
    }
    
    // RUN válido con dígito verificador
    if (!esRunValido(run)) {
        mostrarError("run", "El RUN ingresado no es válido. Formato: 12345678-9.");
        formularioValido = false;
    } else {
        const usuarios = obtenerUsuarios();
        const runYaExiste = usuarios.some(function (u) { return u.run.toUpperCase() === run.toUpperCase(); });
        if (runYaExiste) {
            mostrarError("run", "Ya existe una cuenta registrada con este RUN.");
            formularioValido = false;
        } else {
            ocultarError("run");
        }
    }
    
    // Teléfono: al menos 8 dígitos
    const soloDigitosTelefono = telefono.replace(/\D/g, "");
    if (soloDigitosTelefono.length < 8) {
        mostrarError("telefono", "Ingresa un teléfono válido (mínimo 8 dígitos).");
        formularioValido = false;
    } else {
        ocultarError("telefono");
    }
    
    // Correo válido y no duplicado
    if (!esCorreoValido(correo)) {
        mostrarError("correo", "Ingresa un correo con formato válido (ej: nombre@dominio.com).");
        formularioValido = false;
    } else {
        const usuarios = obtenerUsuarios();
        const correoYaExiste = usuarios.some(function (u) { return u.correo.toLowerCase() === correo.toLowerCase(); });
        if (correoYaExiste) {
            mostrarError("correo", "Ya existe una cuenta registrada con este correo.");
            formularioValido = false;
        } else {
            ocultarError("correo");
        }
    }
    
    // Región y comuna obligatorias
    if (!noEstaVacio(region)) {
        mostrarError("region", "Selecciona una región.");
        formularioValido = false;
    } else {
        ocultarError("region");
    }
    
    if (!noEstaVacio(comuna)) {
        mostrarError("comuna", "Selecciona una comuna.");
        formularioValido = false;
    } else {
        ocultarError("comuna");
    }
    
    // Dirección obligatoria
    if (!noEstaVacio(direccion)) {
        mostrarError("direccion", "Ingresa tu dirección de despacho.");
        formularioValido = false;
    } else {
        ocultarError("direccion");
    }
    
    // Contraseña: mínimo 8 caracteres
    if (!tieneLargoMinimo(contrasena, 8)) {
        mostrarError("contrasena", "La contraseña debe tener al menos 8 caracteres.");
        formularioValido = false;
    } else {
        ocultarError("contrasena");
    }
    
    // Confirmación de contraseña
    if (!contrasenasCoinciden(contrasena, confirmarContrasena)) {
        mostrarError("confirmarContrasena", "Las contraseñas no coinciden.");
        formularioValido = false;
    } else {
        ocultarError("confirmarContrasena");
    }
    
    if (!formularioValido) return;
    
    // Todo válido: guardamos el nuevo usuario
    const usuarios = obtenerUsuarios();
    usuarios.push({
        nombres: nombres.trim(),
        apellidos: apellidos.trim(),
        run: run.trim(),
        telefono: telefono.trim(),
        correo: correo.trim(),
        region: region,
        comuna: comuna,
        direccion: direccion.trim(),
        contrasena: contrasena,
        tipoUsuario: "Cliente"
    });
    guardarUsuarios(usuarios);
    
    document.getElementById("mensaje-exito-registro").classList.remove("d-none");
    formRegistro.reset();
    selectComuna.disabled = true;
});
