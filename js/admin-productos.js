/* ===========================================================
admin-productos.js
Lista el catálogo y permite editar
precio/stock a través de un modal, guardando en LocalStorage.
=========================================================== */

const cuerpoTablaProductos = document.getElementById("cuerpo-tabla-productos");
const modalEditarProducto = new bootstrap.Modal(document.getElementById("modalEditarProducto"));
const formEditarProducto = document.getElementById("form-editar-producto");

function formatearCLPAdmin(numero) {
    return "$" + numero.toLocaleString("es-CL");
}

function renderizarTablaProductos() {
    const catalogo = obtenerProductosConEdiciones();
    cuerpoTablaProductos.innerHTML = "";
    
    catalogo.forEach(function (producto) {
        const fila = document.createElement("tr");
        fila.innerHTML = `
        <td class="text-muted small">${producto.codigo}</td>
        <td>${producto.nombre}</td>
        <td>${producto.categoria}</td>
        <td>${formatearCLPAdmin(producto.precio)}</td>
        <td>
        ${producto.stock < 15
            ? `<span class="badge bg-danger">${producto.stock} uds.</span>`
            : `<span class="badge bg-success">${producto.stock} uds.</span>`}
            </td>
            <td>
            <button class="btn btn-sm btn-flama-outline btn-editar-producto" data-codigo="${producto.codigo}">
            Editar
            </button>
            </td>
            `;
            cuerpoTablaProductos.appendChild(fila);
        });
        
        // Conecta el botón "Editar" de cada fila recién creada
        document.querySelectorAll(".btn-editar-producto").forEach(function (boton) {
            boton.addEventListener("click", function () {
                abrirModalEdicion(boton.dataset.codigo);
            });
        });
    }
    
    function abrirModalEdicion(codigo) {
        const catalogo = obtenerProductosConEdiciones();
        const producto = catalogo.find(function (p) { return p.codigo === codigo; });
        if (!producto) return;
        
        document.getElementById("editar-codigo").value = producto.codigo;
        document.getElementById("editar-nombre").value = producto.nombre;
        document.getElementById("editar-precio").value = producto.precio;
        document.getElementById("editar-stock").value = producto.stock;
        
        modalEditarProducto.show();
    }
    
    formEditarProducto.addEventListener("submit", function (evento) {
        evento.preventDefault();
        
        const codigo = document.getElementById("editar-codigo").value;
        const nombre = document.getElementById("editar-nombre").value.trim();
        const precio = parseInt(document.getElementById("editar-precio").value, 10);
        const stock = parseInt(document.getElementById("editar-stock").value, 10);
        
        guardarEdicionProducto(codigo, { nombre: nombre, precio: precio, stock: stock });
        
        modalEditarProducto.hide();
        renderizarTablaProductos();
    });
    
    renderizarTablaProductos();
