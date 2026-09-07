const contenedorCatalogo = document.getElementById("contenedor-catalogo");
const contadorResultados = document.getElementById("contador-resultados");
const botonesFiltro = document.querySelectorAll(".filtro-btn");

// Tarjetas de un listado de productos
function renderizarCatalogo(listaProductos) {
    contenedorCatalogo.innerHTML = "";

    listaProductos.forEach(function (producto) {
        const columna = document.createElement("div");
        columna.className = "col-sm-6 col-lg-4";
        columna.innerHTML = `
        <a href="producto-detalle.html?codigo=${producto.codigo}" class="text-decoration-none text-reset">
            <div class="tarjeta">
            <img src="${producto.imagen}" alt="${producto.nombre}"
                onerror="this.src='https://placehold.co/400x300/1B4B66/FFFFFF?text=Gas+El+Volc%C3%A1n'">
            <div class="tarjeta-cuerpo">
                <span class="categoria">${producto.categoria}</span>
                <h3>${producto.nombre}</h3>
                <p class="descripcion">${producto.descripcion}</p>
                <span class="precio">$${producto.precio.toLocaleString("es-CL")}</span>
            </div>
        </div>
        </a>
    `;
    contenedorCatalogo.appendChild(columna);
    });

    contadorResultados.textContent = listaProductos.length + " producto(s) encontrado(s)";
}

// Visualmente del botón de categoría activo
function activarBoton(botonActivo) {
    botonesFiltro.forEach(function (boton) {
        boton.classList.remove("btn-flama");
        boton.classList.add("btn-flama-outline");
    });
    botonActivo.classList.remove("btn-flama-outline");
    botonActivo.classList.add("btn-flama");
}

// Escucha los clics en los botones de filtro
botonesFiltro.forEach(function (boton) {
    boton.addEventListener("click", function () {
        const categoriaSeleccionada = boton.dataset.categoria;
        activarBoton(boton);

    if (categoriaSeleccionada === "todas") {
        renderizarCatalogo(productos);
    } else {
        const filtrados = productos.filter(function (producto) {
            return producto.categoria === categoriaSeleccionada;
        });
        renderizarCatalogo(filtrados);
    }
    });
});

// Carga inicial: muestra todo el catálogo
renderizarCatalogo(productos);