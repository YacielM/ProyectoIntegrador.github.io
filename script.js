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
let currentIndex = [0, 0, 0]; // Un array para guardar el índice actual de cada carrusel
const carruselWidth = 400; // Ancho del carrusel (debe coincidir con el CSS)

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
}

