// Catálogo
const productos = [
    {
        codigo: "CL001",
        categoria: "Cilindros de Gas",
        nombre: "Cilindro GLP 5 kg",
        descripcion: "Cilindro de gas licuado 5kg. Para uso residencial",
        precio: 6500,
        stock: 80,
        imagen: "img/cilindro-5kg.jpg"
    },
    {
        codigo: "CL002",
        categoria: "Cilindros de Gas",
        nombre: "Cilindro GLP 11 Kg",
        descripcion: "Cilindro estándar doméstico. El más utilizado en hogares. Compatible con reguladores estandar.",
        precio: 12000,
        stock: 200,
        imagen: "img/cilindro-11kg.jpg"
    },
    {
        codigo: "CL003",
        categoria: "Cilindros de Gas",
        nombre: "Cilingro GLP 15 kg",
        descripcion: "Cilindro de mayor capacidad.",
        precio: 16000,
        stock: 90,
        imagen: "img/cilindro-15kg.jpg"
    },
    {
        codigo: "CL004",
        categoria: "Cilindros de Gas",
        nombre: "Cilindro GLP 45 kg",
        descripcion: "Cilindro industrial. Recomendado uso comercial",
        precio: 45000,
        stock: 30,
        imagen: "img/cilindro-45kg.jpg"
    },
    {
        codigo: "RG001",
        categoria: "Reguladores",
        nombre: "Regulador doméstico estándar",
        descripcion: "Regulador de 1 etapa para cilindros de 5, 11 y 15 kg.",
        precio: 8990,
        stock: 45,
        imagen: "img/regulador-estandar.jpg"
    },
    {
        codigo: "RG002",
        categoria: "Reguladores",
        nombre: "Regulador de alta presión",
        descripcion: "Regulador para cocinas industriales o equipos de mayor consumo. Regulable",
        precio: 18990,
        stock: 12,
        imagen: "img/regulador-alta-presion.jpg"
    },
    {
        codigo: "RG003",
        categoria: "Reguladores",
        nombre: "Regulador dual (2 salidas)",
        descripcion: "Permite conectar dos artefactos simultaneamente al mismo cilíndro.",
        precio: 14990,
        stock: 18,
        imagen: "img/regulador-dual.jpg"
    },
    {
        codigo: "MG001",
        categoria: "Mangueras y Conexiones",
        nombre: "Manguera gas 1.5m",
        descripcion: "Manguera flexible homologada. Diámetro interior 9mm. Compatible con reguladores estándar.",
        precio: 3990,
        stock: 80,
        imagen: "img/manguera-1-5m.jpg"
    },
    {
        codigo: "MG002",
        categoria: "Mangueras y Conexiones",
        nombre: "Manguera gas 3m",
        descripcion: "Manguera de gran longitud",
        precio: 6990,
        stock: 50,
        imagen: "img/manguera-3m.jpg"
    },
    {
        codigo: "MG003",
        categoria: "Mangueras y Conexiones",
        nombre: "Kit conexión completo",
        descripcion: "Regulador + manguera 1.5m + abrazaderas",
        precio: 12990,
        stock: 25,
        imagen: "img/kit-conexion.jpg"
    },
    {
        codigo: "AC001",
        categoria: "Accesorios",
        nombre: "Carro porta cilindro 11/15 kg",
        descripcion: "Carro metálico con ruedas para trasporte de cilindros",
        precio: 12990,
        stock: 20,
        imagen: "img/carro-porta-cilindro.jpg"
    },
    {
        codigo: "AC002",
        categoria: "Accesorios",
        nombre: "Detector de gas a bateria",
        descripcion: "Sensor electroquímico. Alarma sonora y visual de fuga de gas GLP o metano.",
        precio: 19990,
        stock: 8,
        imagen: "img/detector-gas.jpg"
    }
];   

// Novedades / publicaciones
const novedades = [
    {
        id: 1,
        resumen: "Ampliamos nuestra cobertura a la Zona Sur, con despacho los días miércoles.",
        contenido: "A partir de este mes, Distribuidora de Gas El Volcán suma a Bulnes y Quillón dentro de su zona de reparto regular. El despacho en esta zona se realiza todos los miércoles entre las 08:00 y las 16:00 horas, con un tiempo estimado de entrega de 4 a 6 horas. Si vives en estas comunas, ya puedes solicitar tu cilindro a través de nuestro sitio web.",
        imagen: "img/novedad-zona-sur.jpg",
        titulo: "Nueva zona de despacho: Bulnes y Quillón"
    },
    {
        titulo: "Ahora puedes seguir tu pedido en línea",
        resumen: "Adiós a las llamadas repetidas: consulta el estado de tu entrega desde el sitio.",
        contenido: "Sabemos que uno de los mayores problemas era no saber cuándo llegaría el pedido. Con nuestro nuevo sitio, cada cliente podrá revisar el estado de su solicitud sin necesidad de llamar por teléfono, reduciendo la carga de nuestra operadora y dando mayor transparencia al proceso de entrega.",
        imagen: "img/novedad-seguimiento.jpg",
        id: 2,
    }
];

// Regiones y comunas (Chile)
const regiones = [
    {
        comunas: ["Chillán", "Chillán Viejo", "El Carmen", "Pinto", "San Ignacio", "Bulnes", "Quillón"],
        region: "Región de Ñuble"
    },
    {
        comunas: ["Concepción", "Talcahuano", "San Pedro de la Paz", "Los Ángeles", "Coronel"],
        region: "Región del Biobío"
    },
    {
        comunas: ["Santiago", "Providencia", "Las Condes", "Maipú", "Puente Alto"],
        region: "Región Metropolitana"
    }
];

// Tipos de usuario (para registro / mantenedor de usuarios)
const tiposUsuario = ["Cliente", "Operadora", "Repartidor", "Administrador"];