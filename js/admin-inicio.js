/* ===========================================================
admin-inicio.js
Calcula y muestra los indicadores del panel de inicio.
=========================================================== */

const catalogoActual = obtenerProductosConEdiciones();
const usuariosRegistrados = JSON.parse(localStorage.getItem("usuariosGas") || "[]");

document.getElementById("dato-total-productos").textContent = catalogoActual.length;
document.getElementById("dato-total-usuarios").textContent = usuariosRegistrados.length;

const categoriasUnicas = new Set(catalogoActual.map(function (p) { return p.categoria; }));
document.getElementById("dato-total-categorias").textContent = categoriasUnicas.size;

const productosBajoStock = catalogoActual.filter(function (p) { return p.stock < 15; });
document.getElementById("dato-bajo-stock").textContent = productosBajoStock.length;

const cuerpoTablaBajoStock = document.querySelector("#tabla-bajo-stock tbody");
const mensajeSinBajoStock = document.getElementById("mensaje-sin-bajo-stock");

if (productosBajoStock.length === 0) {
    document.getElementById("tabla-bajo-stock").classList.add("d-none");
    mensajeSinBajoStock.classList.remove("d-none");
} else {
    productosBajoStock.forEach(function (producto) {
        const fila = document.createElement("tr");
        fila.innerHTML = `
        <td>${producto.nombre}</td>
        <td>${producto.categoria}</td>
        <td><span class="badge bg-danger">${producto.stock} uds.</span></td>
        `;
        cuerpoTablaBajoStock.appendChild(fila);
    });
}
