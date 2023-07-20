// funcionalid carrucel
document.addEventListener("DOMContentLoaded", function() {
    const slides = document.querySelectorAll(".slide");
    let current_slide = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.display = i === index ? "block" : "none";
        });

    }

    function nextSlide() {
        current_slide = (current_slide + 1) % slides.length;
        showSlide(current_slide)
    }

    function startAutoSlide() {
        setInterval(nextSlide, 5000); //Esto cambia la imagen cada 3 segundos
    }

    showSlide(current_slide);
    startAutoSlide();
})

// Funcionalidad filtro
function filterImages(category) {
    const filter_buttons = document.querySelectorAll('.filtro-btn-container button');
    const imagen_items = document.querySelectorAll('.imagen-item');

    filter_buttons.forEach(button => {
        if (button.innerText.toLowerCase() === category ) {
            button.classList.add('active');
        } else {
            button.classList.remove('active');
        } 
    });

    imagen_items.forEach(item => {
        if (category === 'all' || item.classList.contains(category)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}
