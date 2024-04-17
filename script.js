
let currentImageIndex = 0;
const totalImages = 5;

function prevImage() {
    currentImageIndex = (currentImageIndex - 1 + totalImages) % totalImages;
    updateImage();
}

function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % totalImages;
    updateImage();
}

function updateImage() {
    const img = document.getElementById("carouselImg");
    img.src = `Images/recipe${currentImageIndex + 1}.jpg`;
}