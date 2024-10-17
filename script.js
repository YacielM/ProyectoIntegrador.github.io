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
let currentIndex = [0, 0, 0]; // Cada índice corresponde a un carrusel

// Función para avanzar a la siguiente imagen
function nextImage(carruselId) {
    const carrusel = document.getElementById(`carrusel-${carruselId}`);
    const images = carrusel.getElementsByTagName('img');
    currentIndex[carruselId] = (currentIndex[carruselId] + 1) % images.length;
    carrusel.style.transform = `translateX(${-currentIndex[carruselId] * 300}px)`;
}

// Función para retroceder a la imagen anterior
function prevImage(carruselId) {
    const carrusel = document.getElementById(`carrusel-${carruselId}`);
    const images = carrusel.getElementsByTagName('img');
    currentIndex[carruselId] = (currentIndex[carruselId] - 1 + images.length) % images.length;
    carrusel.style.transform = `translateX(${-currentIndex[carruselId] * 300}px)`;
}
