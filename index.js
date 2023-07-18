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