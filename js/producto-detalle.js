/* ===========================================================
Lee el parámetro "codigo" de la URL (?codigo=CL002),
busca el producto en el arreglo "productos" (datos.js)
y renderiza su vista de detalle.
producto-detalle.js
   =========================================================== */

const parametrosURL = new URLSearchParams(window.location.search);
const codigoSolicitado = parametrosURL.get("codigo");

const producto = productos.find(function (p) {
    return p.codigo === codigoSolicitado;
});

const contenedorDetalle = document.getElementById("contenedor-detalle");
const mensajeNoEncontrado = document.getElementById("mensaje-no-encontrado");
const migaNombreProducto = document.getElementById("miga-nombre-producto");

if (!producto) {
    // Código inválido o inexistente: mostramos el mensaje y ocultamos el detalle
    contenedorDetalle.classList.add("d-none");
    mensajeNoEncontrado.classList.remove("d-none");
} else {
    migaNombreProducto.textContent = producto.nombre;

    contenedorDetalle.innerHTML = `
        <div class="row g-5 align-items-start">
        <div class="col-md-5">
            <img src="${producto.imagen}" alt="${producto.nombre}" class="img-fluid rounded-3 shadow-sm"
            onerror="this.src='https://placehold.co/500x400/1B4B66/FFFFFF?text=Gas+El+Volc%C3%A1n'">
        </div>
        <div class="col-md-7">
            <span class="categoria">${producto.categoria}</span>
            <h1 class="mt-1">${producto.nombre}</h1>
            <p class="text-muted">${producto.descripcion}</p>
            <p class="precio fs-3 mb-1">$${producto.precio.toLocaleString("es-CL")}</p>
            <p class="small text-muted mb-4">
            ${producto.stock > 0
            ? "✅ " + producto.stock + " unidades disponibles"
            : "❌ Sin stock por el momento"}
        </p>

        <div class="d-flex align-items-center gap-3 mb-3">
            <label for="input-cantidad" class="mb-0 fw-semibold">Cantidad:</label>
            <input type="number" id="input-cantidad" class="form-control" style="width: 90px;"
                value="1" min="1" max="${producto.stock}">
        </div>

        <button class="btn btn-flama btn-lg" id="btn-agregar-seleccion" ${producto.stock === 0 ? "disabled" : ""}>
            Agregar a selección
        </button>
        <p class="small text-success mt-2 d-none" id="mensaje-agregado">Producto agregado a tu selección.</p>

        <a href="catalogo.html" class="d-block mt-4 small">← Volver al catálogo</a>
        </div>
    </div>
    `;

    document.getElementById("btn-agregar-seleccion").addEventListener("click", function () {
        const cantidad = parseInt(document.getElementById("input-cantidad").value, 10) || 1;
        agregarASeleccion(producto.codigo, cantidad);

        const mensajeAgregado = document.getElementById("mensaje-agregado");
        mensajeAgregado.classList.remove("d-none");
        setTimeout(function () {
            mensajeAgregado.classList.add("d-none");
        }, 2500);
    });
}