document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.querySelector(".menu-icon");
    const sidebar = document.querySelector(".sidebar");

    if (menuIcon && sidebar) {
        menuIcon.addEventListener("click", () => {
            sidebar.classList.toggle("open");
        });
    }

    const caruselContainer = document.querySelector(".carusel-container");
    const slides = document.querySelectorAll(".carusel-slide");

    if (slides.length > 0) {
        const slideWidth = slides[0].offsetWidth;

        setInterval(() => {
            caruselContainer.style.transition = "transform 0.5s";
            caruselContainer.style.transform = `translateX(-${slideWidth}px)`;

            setTimeout(() => {
                caruselContainer.appendChild(caruselContainer.firstElementChild);
                caruselContainer.style.transition = "none";
                caruselContainer.style.transform = "translateX(0)";
            }, 500);
        }, 2500);
    }
});
// READ MORE BUTTON
document.querySelectorAll(".read-more").forEach(button => {
    button.addEventListener("click", () => {
        const text = button.previousElementSibling;

        if (text.style.display === "block") {
            text.style.display = "none";
            button.textContent = "Read more";
        } else {
            text.style.display = "block";
            button.textContent = "Show less";
        }
    });
});

