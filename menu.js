// Plantilla de barra de navegación reutilizable
const menuTemplate = `

`;

// Plantilla temporal para el cuerpo de la página
const contenidoTemplate = `
    Aquí irá el catálogo principal de productos, banners e imágenes promotionales.
`;

// Inyección automática al cargar el documento
document.addEventListener("DOMContentLoaded", () => {
    const header = document.getElementById("header-menu");
    const main = document.getElementById("contenido");

    if (header) header.innerHTML = menuTemplate;
    if (main) main.innerHTML = contenidoTemplate;
});