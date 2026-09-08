/* ===========================================================
Funciones de validación reutilizables para los formularios
de registro, login y contacto.
=========================================================== */

// Muestra un mensaje de error bajo un campo y lo marca como inválido
function mostrarError(idCampo, mensaje) {
    const campo = document.getElementById(idCampo);
    const mensajeError = document.getElementById("error-" + idCampo);
    campo.classList.add("is-invalid");
    if (mensajeError) {
        mensajeError.textContent = mensaje;
        mensajeError.classList.add("visible");
    }
}

// Limpia el estado de error de un campo
function ocultarError(idCampo) {
    const campo = document.getElementById(idCampo);
    const mensajeError = document.getElementById("error-" + idCampo);
    campo.classList.remove("is-invalid");
    if (mensajeError) {
        mensajeError.classList.remove("visible");
    }
}

// Valida formato de correo electrónico
function esCorreoValido(correo) {
    const patron = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    return patron.test(correo.trim());
}

// Valida que un texto no esté vacío (quitando espacios)
function noEstaVacio(texto) {
    return texto.trim().length > 0;
}

// Valida largo mínimo de una contraseña (u otro texto)
function tieneLargoMinimo(texto, minimo) {
    return texto.trim().length >= minimo;
}

// Valida el RUN chileno (formato 12.345.678-9 o 12345678-9) incluyendo dígito verificador
function esRunValido(run) {
    const runLimpio = run.replace(/\./g, "").replace(/-/g, "").trim().toUpperCase();
    
    if (runLimpio.length < 2) return false;
    
    const cuerpo = runLimpio.slice(0, -1);
    const dv = runLimpio.slice(-1);
    
    if (!/^\d+$/.test(cuerpo)) return false;
    
    let suma = 0;
    let multiplicador = 2;
    
    for (let i = cuerpo.length - 1; i >= 0; i--) {
        suma += parseInt(cuerpo.charAt(i), 10) * multiplicador;
        multiplicador = multiplicador === 7 ? 2 : multiplicador + 1;
    }
    
    const resto = 11 - (suma % 11);
    let dvEsperado;
    if (resto === 11) dvEsperado = "0";
    else if (resto === 10) dvEsperado = "K";
    else dvEsperado = String(resto);
    
    return dv === dvEsperado;
}

// Valida que dos contraseñas coincidan
function contrasenasCoinciden(contrasena, confirmacion) {
    return contrasena === confirmacion;
}

// Rellena dinámicamente el <select> de comunas según la región elegida
function llenarComunasSegunRegion(selectRegion, selectComuna) {
    const regionSeleccionada = regiones.find(function (r) {
        return r.region === selectRegion.value;
    });
    
    selectComuna.innerHTML = '<option value="">Selecciona una comuna</option>';
    
    if (regionSeleccionada) {
        regionSeleccionada.comunas.forEach(function (comuna) {
            const opcion = document.createElement("option");
            opcion.value = comuna;
            opcion.textContent = comuna;
            selectComuna.appendChild(opcion);
        });
        selectComuna.disabled = false;
    } else {
        selectComuna.disabled = true;
    }
}

// Rellena dinámicamente el <select> de regiones (usado al cargar la página)
function llenarSelectRegiones(selectRegion) {
    selectRegion.innerHTML = '<option value="">Selecciona una región</option>';
    regiones.forEach(function (r) {
        const opcion = document.createElement("option");
        opcion.value = r.region;
        opcion.textContent = r.region;
        selectRegion.appendChild(opcion);
    });
}
