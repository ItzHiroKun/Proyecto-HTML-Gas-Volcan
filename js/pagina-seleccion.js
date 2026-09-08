/* ===========================================================
    Renderiza la tabla de la selección (carrito), permite
    cambiar cantidades, quitar productos y calcular totales.
    Depende de las funciones de seleccion.js.
   =========================================================== */

const COSTO_DESPACHO = 3000;

const vistaConProductos = document.getElementById("vista-con-productos");
const vistaVacia = document.getElementById("vista-vacia");
const cuerpoTabla = document.getElementById("cuerpo-tabla-seleccion");
const textoSubtotal = document.getElementById("texto-subtotal");
const textoDespacho = document.getElementById("texto-despacho");
const textoTotal = document.getElementById("texto-total");
const mensajeConfirmacion = document.getElementById("mensaje-confirmacion");

function formatearCLP(numero) {
    return "$" + numero.toLocaleString("es-CL");
}

function renderizarSeleccion() {
    const seleccion = obtenerSeleccion();
    
    if (seleccion.length === 0) {
        vistaConProductos.classList.add("d-none");
        vistaVacia.classList.remove("d-none");
        return;
    }

    vistaVacia.classList.add("d-none");
    vistaConProductos.classList.remove("d-none");

    cuerpoTabla.innerHTML = "";
    let subtotalGeneral = 0;

    seleccion.forEach(function (item) {
        const subtotalItem = item.precio * item.cantidad;
        subtotalGeneral += subtotalItem;

        const fila = document.createElement("tr");
        fila.innerHTML = `
        <td class="d-flex align-items-center gap-2">
        <img src="${item.imagen}" alt="${item.nombre}" style="width:55px;height:55px;object-fit:cover;border-radius:8px;"
            onerror="this.src='https://placehold.co/100x100/1B4B66/FFFFFF?text=Gas'">
            <span>${item.nombre}</span>
        </td>
        <td>${formatearCLP(item.precio)}</td>
        <td>
        <input type="number" class="form-control form-control-sm input-cantidad-fila"
                data-codigo="${item.codigo}" value="${item.cantidad}" min="1">
        </td>
        <td class="fw-semibold">${formatearCLP(subtotalItem)}</td>
        <td>
            <button class="btn btn-sm btn-outline-danger btn-quitar-fila" data-codigo="${item.codigo}">
            Quitar
            </button>
        </td>
        `;
        cuerpoTabla.appendChild(fila);
    });

    const totalGeneral = subtotalGeneral + COSTO_DESPACHO;
    textoSubtotal.textContent = formatearCLP(subtotalGeneral);
    textoDespacho.textContent = formatearCLP(COSTO_DESPACHO);
    textoTotal.textContent = formatearCLP(totalGeneral);

  // Listeners de cambio de cantidad (se agregan después de generar las filas)
    document.querySelectorAll(".input-cantidad-fila").forEach(function (input) {
        input.addEventListener("change", function () {
        const codigo = input.dataset.codigo;
        let nuevaCantidad = parseInt(input.value, 10);
        if (isNaN(nuevaCantidad) || nuevaCantidad < 1) nuevaCantidad = 1;

        const seleccionActual = obtenerSeleccion();
        const item = seleccionActual.find(function (i) { return i.codigo === codigo; });
        if (item) {
            item.cantidad = nuevaCantidad;
            guardarSeleccion(seleccionActual);
        }
        renderizarSeleccion();
        actualizarContadorSeleccion();
        });
    });

  // Listeners del botón "Quitar"
    document.querySelectorAll(".btn-quitar-fila").forEach(function (boton) {
        boton.addEventListener("click", function () {
        quitarDeSeleccion(boton.dataset.codigo);
        renderizarSeleccion();
        });
    });
}

// Botón "Vaciar selección"
document.getElementById("btn-vaciar-seleccion").addEventListener("click", function () {
    guardarSeleccion([]);
    actualizarContadorSeleccion();
    renderizarSeleccion();
});

// Botón "Confirmar pedido": simula el envío y limpia la selección
document.getElementById("btn-confirmar-pedido").addEventListener("click", function () {
    guardarSeleccion([]);
    actualizarContadorSeleccion();
    renderizarSeleccion();
    mensajeConfirmacion.classList.remove("d-none");
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
});

// Carga inicial
renderizarSeleccion();