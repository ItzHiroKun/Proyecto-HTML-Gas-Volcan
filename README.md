
# Distribuidora de Gas El Volcán — Sitio Web

> **Importante:** debido a problemas técnicos, este commit debió realizarse el día **05/09/2026**.

Proyecto desarrollado para la asignatura **SECCION: 009D — Desarrollo Fullstack II**, Evaluación Parcial N° 1

## Descripción

Sitio web para la Distribuidora de Gas El Volcán, empresa de reparto de gas licuado a domicilio en Chillán, Región de Ñuble. El sitio permite a los visitantes explorar el catálogo de productos (cilindros, reguladores, mangueras y accesorios), armar una selección de compra y contactarse con la empresa, además de contar con un panel administrativo simulado.

## Tecnologías utilizadas

- **HTML5** — estructura semántica (`header`, `nav`, `main`, `section`, `article`, `footer`)
- **CSS** — hoja de estilos externa y personalizada
- **Bootstrap 5** — grillas y adaptabilidad a distintos dispositivos (celular, tablet, escritorio)
- **JavaScript** — arreglos, funciones, validaciones de formularios y manipulación del DOM
- **LocalStorage** — persistencia del carrito de selección en el navegador

## Estructura del proyecto

```
proyecto-gas-volcan/
├── index.html               Página de inicio
├── nosotros.html             Sobre la empresa
├── novedades.html            Publicaciones/novedades
├── novedad-detalle.html      Detalle de una novedad
├── contacto.html             Formulario de contacto
├── registro.html             Registro de usuario
├── login.html                Inicio de sesión
├── catalogo.html             Catálogo completo con filtro por categoría
├── producto-detalle.html     Detalle de un producto (vía parámetro en la URL)
├── seleccion.html            Carrito de selección (LocalStorage)
├── admin/                    Panel administrativo
│   ├── admin-inicio.html
│   ├── admin-productos.html
│   └── admin-usuarios.html
├── css/
│   └── estilos.css           Hoja de estilos externa
├── js/
│   ├── datos.js               Arreglos de productos, novedades y regiones/comunas
│   ├── catalogo.js            Renderizado y filtro del catálogo
│   ├── producto-detalle.js    Lectura de parámetros URL y render del detalle
│   ├── seleccion.js           Funciones núcleo del carrito (LocalStorage)
│   ├── pagina-seleccion.js    Renderizado de la tabla del carrito
│   └── validaciones.js        Validaciones de formularios
└── img/                       Imágenes del sitio
```

## Funcionalidades implementadas

- [x] Estructura HTML5 semántica en todas las páginas
- [x] Diseño responsive con Bootstrap (celular / tablet / escritorio)
- [x] Catálogo generado dinámicamente desde un arreglo de JavaScript
- [x] Filtro de catálogo por categoría
- [x] Vista de detalle de producto mediante parámetros en la URL
- [x] Carrito de selección con LocalStorage (agregar, editar cantidad, quitar, vaciar)
- [x] Cálculo automático de subtotal, despacho y total
- [ ] Formularios con validaciones JS (en desarrollo)
- [ ] Panel administrativo (en desarrollo)

## Cómo ejecutar el proyecto

No requiere instalación ni servidor. Basta con abrir `index.html` en el navegador, o servirlo con una extensión tipo *Live Server* (Recomendado).

## Autor

Ignacio Vera — SECCION: 009D — Desarrollo Fullstack II.
