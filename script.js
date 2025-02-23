// Smooth Scrolling
document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('.nav-links a');

    links.forEach(link => {
        link.addEventListener('click', event => {
            event.preventDefault();
            const target = document.querySelector(link.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});

// Scroll Progress Bar
window.addEventListener("scroll", function() {
    const progressBar = document.getElementById("progress-bar");
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPosition = window.scrollY;
    const width = (scrollPosition / scrollHeight) * 100;
    progressBar.style.width = width + "%";
});

// Shrinking Header
window.addEventListener("scroll", function() {
    const header = document.querySelector("header");
    if (window.scrollY > 50) {
        header.classList.add("shrink");
    } else {
        header.classList.remove("shrink");
    }
});

