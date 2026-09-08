# Distribuidora de Gas El Volcán — Sitio Web

Proyecto desarrollado para la asignatura **SECCION: 009D — Desarrollo Fullstack II**, Evaluación Parcial N° 1.

## Descripción

Sitio web para la Distribuidora de Gas El Volcán, empresa de reparto de gas licuado a domicilio en Chillán, Región de Ñuble. El sitio permite a los visitantes explorar el catálogo de productos (cilindros, reguladores, mangueras y accesorios), armar una selección de compra, registrarse/iniciar sesión y contactarse con la empresa, además de contar con un panel administrativo simulado.

## Tecnologías utilizadas

- **HTML5** — estructura semántica (`header`, `nav`, `main`, `section`, `article`, `footer`)
- **CSS** — hoja de estilos externa y personalizada
- **Bootstrap 5** — grillas y adaptabilidad a distintos dispositivos (celular, tablet, escritorio)
- **JavaScript** — arreglos, funciones, validaciones de formularios y manipulación del DOM
- **LocalStorage** — persistencia de carrito, usuarios y ediciones del panel admin

## Estructura del proyecto

```
proyecto-gas-volcan/
├── index.html                Página de inicio
├── contacto.html              Formulario de contacto
├── registro.html              Registro de usuario
├── login.html                 Inicio de sesión
├── catalogo.html               Catálogo completo con filtro por categoría
├── producto-detalle.html       Detalle de un producto (vía parámetro en la URL)
├── seleccion.html               Carrito de selección (LocalStorage)
├── admin/                       Panel administrativo
│   ├── admin-inicio.html
│   ├── admin-productos.html
│   └── admin-usuarios.html
├── css/
│   └── estilos.css              Hoja de estilos externa
├── js/
├── ├── adminjs/
│   │    ├── admin-datos.js           Overlay de ediciones de productos (sin BD)
│   │    ├── admin-inicio.js          Indicadores del panel administrativo
│   │    ├── admin-productos.js       Mantenedor de productos (editar precio/stock)
│   │    └── admin-usuarios.js        Mantenedor de usuarios (rol, crear usuario interno)
│   ├── datos.js                 Arreglos de productos y regiones/comunas
│   ├── catalogo.js              Renderizado y filtro del catálogo
│   ├── producto-detalle.js      Lectura de parámetros URL y render del detalle
│   ├── seleccion.js             Funciones núcleo del carrito (LocalStorage)
│   ├── pagina-seleccion.js      Renderizado de la tabla del carrito
│   ├── validaciones.js          Validaciones reutilizables de formularios
│   ├── registro.js              Lógica y validación del registro de usuario
│   ├── login.js                 Autenticación contra usuarios registrados
│   ├── contacto.js              Validación del formulario de contacto
└── img/                          Imágenes del sitio
```

## Funcionalidades implementadas

- [x] Estructura HTML5 semántica en todas las páginas
- [x] Diseño responsivo con Bootstrap (celular / tablet / escritorio)
- [x] Catálogo generado dinámicamente desde un arreglo de JavaScript
- [x] Filtro de catálogo por categoría
- [x] Vista de detalle de producto mediante parámetros en la URL
- [x] Carrito de selección con LocalStorage (agregar, editar cantidad, quitar, vaciar)
- [x] Cálculo automático de subtotal, despacho y total
- [x] Registro de usuario con validación de RUN (dígito verificador), correo, contraseña y región/comuna dependientes
- [x] Login validado contra los usuarios registrados
- [x] Formulario de contacto con validaciones
- [x] Panel administrativo: dashboard, mantenedor de productos y mantenedor de usuarios
- [ ] Páginas "Nosotros" y "Novedades" (en desarrollo)

## Cómo ejecutar el proyecto

No requiere instalación ni servidor. Basta con abrir `index.html` en el navegador, o servirlo con una extensión tipo *Live Server*(RECOMENDADO).

## Autor

Ignacio Vera — SECCION: 009D -- Desarrollo Fullstack II.
