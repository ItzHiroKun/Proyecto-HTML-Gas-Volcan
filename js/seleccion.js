/* ===========================================================
    seleccion.js
    Funciones núcleo del carrito de selección, guardado en
    LocalStorage bajo la clave "seleccionGas".
    Se incluye en cualquier página que necesite agregar,
    contar o mostrar productos seleccionados.
   =========================================================== */
const CLAVE_SELECCION = "seleccionGas";


function obtenerSeleccion() {
    const datosGuardados = localStorage.getItem(CLAVE_SELECCION);
    return datosGuardados ? JSON.parse(datosGuardados) : [];
}

// Guarda el arreglo de selección completo en LocalStorage
function guardarSeleccion(seleccion) {
    localStorage.setItem(CLAVE_SELECCION, JSON.stringify(seleccion));
}

// Agrega un producto a la selección. Si ya existe, suma la cantidad.
function agregarASeleccion(codigoProducto, cantidad) {
    const producto = productos.find(function (p) { return p.codigo === codigoProducto; });
    if (!producto) return;
    
    const seleccion = obtenerSeleccion();
    const itemExistente = seleccion.find(function (item) { return item.codigo === codigoProducto; });
    
    if (itemExistente) {
        itemExistente.cantidad += cantidad;
    } else {
        seleccion.push({
            codigo: producto.codigo,
            nombre: producto.nombre,
            precio: producto.precio,
            imagen: producto.imagen,
            cantidad: cantidad
        });
    }
    
    guardarSeleccion(seleccion);
    actualizarContadorSeleccion();
}

// Elimina un producto de la selección por código
function quitarDeSeleccion(codigoProducto) {
    const seleccion = obtenerSeleccion().filter(function (item) {
        return item.codigo !== codigoProducto;
    });
    guardarSeleccion(seleccion);
    actualizarContadorSeleccion();
}

// Calcula el total de unidades en la selección (para mostrar en el header, si se agrega)
function contarUnidadesSeleccion() {
    return obtenerSeleccion().reduce(function (total, item) {
        return total + item.cantidad;
    }, 0);
}

// Actualiza cualquier badge con id "contador-seleccion" presente en la página actual
function actualizarContadorSeleccion() {
    const badge = document.getElementById("contador-seleccion");
    if (badge) {
        badge.textContent = contarUnidadesSeleccion();
    }
}

// Se ejecuta apenas carga cualquier página que incluya este script
document.addEventListener("DOMContentLoaded", actualizarContadorSeleccion);