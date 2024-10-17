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