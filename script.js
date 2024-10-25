let currentImageIndex = 0;
const images = document.querySelectorAll('.AutoCarrusel img');
const totalImages = images.length;

function changeImage() {
    images[currentImageIndex].classList.remove('active'); // Quita la clase 'active' de la imagen actual
    currentImageIndex = (currentImageIndex + 1) % totalImages; // Avanza al siguiente índice
    images[currentImageIndex].classList.add('active'); // Añade la clase 'active' a la nueva imagen
}

// Cambia la imagen cada 3 segundos
setInterval(changeImage, 3000);


// PAGINA Y FUNCION DE SERVICIOS
/*let currentIndex = [0, 0, 0]; // Un array para guardar el índice actual de cada carrusel
const carruselWidth = 400;    // Ancho del carrusel (debe coincidir con el CSS)

function nextImage(carruselId) {
    const carrusel = document.getElementById(`carrusel-${carruselId}`);
    const images = carrusel.getElementsByTagName('img');
    currentIndex[carruselId] = (currentIndex[carruselId] + 1) % images.length;
    carrusel.style.transform = `translateX(${-currentIndex[carruselId] * carruselWidth}px)`;
}

function prevImage(carruselId) {
    const carrusel = document.getElementById(`carrusel-${carruselId}`);
    const images = carrusel.getElementsByTagName('img');
    currentIndex[carruselId] = (currentIndex[carruselId] - 1 + images.length) % images.length;
    carrusel.style.transform = `translateX(${-currentIndex[carruselId] * carruselWidth}px)`;
}*/
//carrusel de imagenes con URL 

const carruselImagenes = [
    ["Imagenes/posible principal o servicio 2.jpeg", "Imagenes/posible principal o servicio 6.jpeg", "Imagenes/principal terreno 2.jpeg"], // Carrusel 1
    ["Imagenes/futbol 2.jpeg", "Imagenes/futbol.jpeg", "Imagenes/posible principal o servicio 3.jpeg"], // Carrusel 2
    ["Imagenes/posible principal o servicio 5.jpeg", "Imagenes/posible principal o servicio 4 .jpeg", "Imagenes/posible principal o servicio.jpeg"]  // Carrusel 3
];

// Índices actuales para cada carrusel
let currentIndex = [0, 0, 0];

// Función para mostrar la imagen actual de un carrusel dado
function showImage(carruselIndex) {
    const imgElement = document.getElementById(`carousel${carruselIndex}Image`);
    imgElement.src = carruselImagenes[carruselIndex][currentIndex[carruselIndex]];
}

// Función para avanzar a la siguiente imagen
function nextImage(carruselIndex) {
    currentIndex[carruselIndex] = (currentIndex[carruselIndex] + 1) % carruselImagenes[carruselIndex].length;
    showImage(carruselIndex);
}

// Función para retroceder a la imagen anterior
function previousImage(carruselIndex) {
    currentIndex[carruselIndex] = (currentIndex[carruselIndex] - 1 + carruselImagenes[carruselIndex].length) % carruselImagenes[carruselIndex].length;
    showImage(carruselIndex);
}

// Inicialización de los carruseles
showImage(0);
showImage(1);
showImage(2);


