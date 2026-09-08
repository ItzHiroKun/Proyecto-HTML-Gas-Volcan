/* ===========================================================
admin-usuarios.js
Lista los usuarios guardados en LocalStorage ("usuariosGas"),
permite cambiar su rol y crear usuarios internos nuevos.
=========================================================== */

const CLAVE_USUARIOS_ADMIN = "usuariosGas";

const cuerpoTablaUsuarios = document.getElementById("cuerpo-tabla-usuarios");
const mensajeSinUsuarios = document.getElementById("mensaje-sin-usuarios");
const modalNuevoUsuario = new bootstrap.Modal(document.getElementById("modalNuevoUsuario"));
const formNuevoUsuario = document.getElementById("form-nuevo-usuario");

function obtenerUsuariosAdmin() {
    const datos = localStorage.getItem(CLAVE_USUARIOS_ADMIN);
    return datos ? JSON.parse(datos) : [];
}

function guardarUsuariosAdmin(usuarios) {
    localStorage.setItem(CLAVE_USUARIOS_ADMIN, JSON.stringify(usuarios));
}

function claseBadgeSegunRol(rol) {
    if (rol === "Administrador") return "badge-rol-admin";
    if (rol === "Operadora") return "badge-rol-operadora";
    if (rol === "Repartidor") return "badge-rol-repartidor";
    return "bg-secondary";
}

function renderizarTablaUsuarios() {
    const usuarios = obtenerUsuariosAdmin();
    cuerpoTablaUsuarios.innerHTML = "";
    
    if (usuarios.length === 0) {
        mensajeSinUsuarios.classList.remove("d-none");
        return;
    }
    mensajeSinUsuarios.classList.add("d-none");
    
    usuarios.forEach(function (usuario, indice) {
        const fila = document.createElement("tr");
        fila.innerHTML = `
        <td>${usuario.nombres} ${usuario.apellidos || ""}</td>
        <td>${usuario.correo}</td>
        <td class="text-muted small">${usuario.run || "—"}</td>
        <td>
        <select class="form-select form-select-sm selector-rol" data-indice="${indice}" style="width: 150px;">
        ${["Cliente", "Operadora", "Repartidor", "Administrador"].map(function (rol) {
            return `<option value="${rol}" ${usuario.tipoUsuario === rol ? "selected" : ""}>${rol}</option>`;
        }).join("")}
        </select>
        </td>
        <td>
        <span class="badge ${claseBadgeSegunRol(usuario.tipoUsuario)}">●</span>
        </td>
        `;
        cuerpoTablaUsuarios.appendChild(fila);
    });
    
    // Conecta el cambio de rol en cada select
    document.querySelectorAll(".selector-rol").forEach(function (select) {
        select.addEventListener("change", function () {
            const usuarios = obtenerUsuariosAdmin();
            usuarios[select.dataset.indice].tipoUsuario = select.value;
            guardarUsuariosAdmin(usuarios);
            renderizarTablaUsuarios();
        });
    });
}

// Crear nuevo usuario interno (Operadora / Repartidor / Administrador)
formNuevoUsuario.addEventListener("submit", function (evento) {
    evento.preventDefault();
    
    const nombres = document.getElementById("nuevo-nombres").value;
    const correo = document.getElementById("nuevo-correo").value;
    const run = document.getElementById("nuevo-run").value;
    const rol = document.getElementById("nuevo-rol").value;
    
    let valido = true;
    const usuarios = obtenerUsuariosAdmin();
    
    if (!esCorreoValido(correo) || usuarios.some(function (u) { return u.correo.toLowerCase() === correo.toLowerCase(); })) {
        mostrarError("nuevo-correo", "Correo inválido o ya registrado.");
        valido = false;
    } else {
        ocultarError("nuevo-correo");
    }
    
    if (!esRunValido(run)) {
        mostrarError("nuevo-run", "El RUN ingresado no es válido.");
        valido = false;
    } else {
        ocultarError("nuevo-run");
    }
    
    if (!valido) return;
    
    usuarios.push({
        nombres: nombres.trim(),
        apellidos: "",
        correo: correo.trim(),
        run: run.trim(),
        contrasena: "cambiar123",
        tipoUsuario: rol
    });
    guardarUsuariosAdmin(usuarios);
    
    formNuevoUsuario.reset();
    modalNuevoUsuario.hide();
    renderizarTablaUsuarios();
});

renderizarTablaUsuarios();
