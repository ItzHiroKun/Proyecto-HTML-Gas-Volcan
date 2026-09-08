# Distribuidora de Gas El Volcán — Sitio Web

> ⚠️ **Importante:** debió de hacerse un commit el día **06/09/2026**, pero debido a errores al realizar el commit se tuvo que aplazar hasta el **07-08/09/2026**.

Proyecto desarrollado para la asignatura **SECCION: 009D — Desarrollo Fullstack II**, Evaluación Parcial N° 1.

## Descripción

Sitio web para la Distribuidora de Gas El Volcán, empresa de reparto de gas licuado a domicilio en Chillán, Región de Ñuble. El sitio permite a los visitantes explorar el catálogo de productos (cilindros, reguladores, mangueras y accesorios), armar una selección de compra, registrarse/iniciar sesión y contactarse con la empresa, además de contar con un panel administrativo simulado.

## Tecnologías utilizadas

- **HTML5** — estructura semántica (`header`, `nav`, `main`, `section`, `article`, `footer`)
- **CSS** — hoja de estilos externa y personalizada
- **Bootstrap 5** — grillas y adaptabilidad a distintos dispositivos (celular, tablet, escritorio)
- **JavaScript** — arreglos, funciones, validaciones de formularios y manipulación del DOM
- **LocalStorage** — persistencia de carrito, usuarios y ediciones del panel admin

## Registro de cambios

### Corrección de estructura de carpetas (07-08/09/2026)
Tras una reorganización manual del proyecto, los archivos `.html` quedaron dentro de una carpeta `html/`, separados de `css/`, `js/` e `img/`. Esto rompió todas las rutas relativas (`img/...`, `css/...`, `js/...`), provocando que ninguna imagen, estilo ni script cargara correctamente.

**Solución aplicada:** se movieron nuevamente todos los archivos `.html` de nivel raíz (excepto los del panel admin) fuera de la carpeta `html/`, dejándolos al mismo nivel que `css/`, `js/` e `img/`. La carpeta `admin/` se mantuvo como subcarpeta real, ya que sus archivos ya estaban preparados con rutas relativas `../` para funcionar un nivel más abajo. Con esto, todas las imágenes, estilos y scripts volvieron a cargar con normalidad.

### Páginas agregadas
- `nosotros.html` — historia, misión, visión y valores de la empresa (página estática)
- `novedades.html` — listado de publicaciones generado dinámicamente desde el arreglo `novedades` (`datos.js`)
- `novedad-detalle.html` — vista de detalle de una novedad, leyendo el `id` desde parámetros de la URL

### Funcionalidades completadas anteriormente
- Catálogo dinámico con filtro por categoría (`catalogo.html`, `js/catalogo.js`)
- Detalle de producto vía parámetros de URL (`producto-detalle.html`, `js/producto-detalle.js`)
- Carrito de selección con LocalStorage: agregar, editar cantidad, quitar, vaciar, cálculo de subtotal/despacho/total (`seleccion.html`, `js/seleccion.js`, `js/pagina-seleccion.js`)
- Registro de usuario con validación de RUN (dígito verificador incluido), correo, contraseña y región/comuna dependientes (`registro.html`, `js/registro.js`)
- Login validado contra los usuarios registrados en LocalStorage (`login.html`, `js/login.js`)
- Formulario de contacto con validaciones (`contacto.html`, `js/contacto.js`)
- Panel administrativo completo: dashboard con indicadores, mantenedor de productos (edición vía overlay en LocalStorage) y mantenedor de usuarios (cambio de rol, creación de usuarios internos)

## Estructura del proyecto

```
proyecto-gas-volcan/
├── index.html                 Página de inicio
├── nosotros.html                Sobre la empresa
├── novedades.html                Publicaciones/novedades
├── novedad-detalle.html           Detalle de una novedad
├── contacto.html                   Formulario de contacto
├── registro.html                    Registro de usuario
├── login.html                        Inicio de sesión
├── catalogo.html                      Catálogo completo con filtro por categoría
├── producto-detalle.html               Detalle de un producto (vía parámetro en la URL)
├── seleccion.html                        Carrito de selección (LocalStorage)
├── admin/                                 Panel administrativo
│   ├── admin-inicio.html
│   ├── admin-productos.html
│   └── admin-usuarios.html
├── css/
│   └── estilos.css                        Hoja de estilos externa
├── js/
│   ├── datos.js                           Arreglos de productos, novedades y regiones/comunas
│   ├── catalogo.js                        Renderizado y filtro del catálogo
│   ├── producto-detalle.js                Lectura de parámetros URL y render del detalle
│   ├── seleccion.js                       Funciones núcleo del carrito (LocalStorage)
│   ├── pagina-seleccion.js                Renderizado de la tabla del carrito
│   ├── validaciones.js                    Validaciones reutilizables de formularios
│   ├── registro.js                        Lógica y validación del registro de usuario
│   ├── login.js                           Autenticación contra usuarios registrados
│   ├── contacto.js                        Validación del formulario de contacto
│   ├── admin-datos.js                     Overlay de ediciones de productos (sin BD)
│   ├── admin-inicio.js                    Indicadores del panel administrativo
│   ├── admin-productos.js                 Mantenedor de productos (editar precio/stock)
│   └── admin-usuarios.js                  Mantenedor de usuarios (rol, crear usuario interno)
└── img/                                    Imágenes del sitio
```

## Funcionalidades implementadas

- [x] Estructura HTML5 semántica en todas las páginas
- [x] Diseño responsive con Bootstrap (celular / tablet / escritorio)
- [x] Catálogo generado dinámicamente desde un arreglo de JavaScript
- [x] Filtro de catálogo por categoría
- [x] Vista de detalle de producto mediante parámetros en la URL
- [x] Carrito de selección con LocalStorage (agregar, editar cantidad, quitar, vaciar)
- [x] Cálculo automático de subtotal, despacho y total
- [x] Registro de usuario con validación de RUN, correo, contraseña y región/comuna dependientes
- [x] Login validado contra los usuarios registrados
- [x] Formulario de contacto con validaciones
- [x] Panel administrativo: dashboard, mantenedor de productos y mantenedor de usuarios
- [x] Páginas "Nosotros" y "Novedades" con su detalle

## Cómo ejecutar el proyecto

No requiere instalación ni servidor. Basta con abrir `index.html` en el navegador (RECOMENDABLE), o servirlo con una extensión tipo *Live Server*.

## Documento ERS

El documento de Especificación de Requisitos del Software (ERS) se entregará por SEPARADO.

## Autor

Ignacio Vera — SECCION: 009D -- Desarrollo Fullstack II.
