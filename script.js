/* JavaScript for Preloader */
document.addEventListener("DOMContentLoaded", function() {
    const preloader = document.getElementById("preloader");
    setTimeout(() => {
        preloader.style.display = "none";
    }, 1500);
});

/* Smooth Scrolling */
document.querySelectorAll('.nav-links a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

/* Scroll Reveal Animations */
const sr = ScrollReveal({
    origin: 'bottom',
    distance: '50px',
    duration: 1000,
    delay: 300,
    reset: true
});

sr.reveal('.hero-content', { interval: 200 });
sr.reveal('.about-content', { interval: 200 });
sr.reveal('.portfolio-item', { interval: 200 });
sr.reveal('.service', { interval: 200 });
sr.reveal('.contact-form', { interval: 200 });

/* Header Shrink on Scroll */
window.addEventListener("scroll", function() {
    const header = document.querySelector("header");
    if (window.scrollY > 50) {
        header.classList.add("shrink");
    } else {
        header.classList.remove("shrink");
    }
});

/* Cursor Shadow Effect */
const cursorShadow = document.createElement('div');
cursorShadow.classList.add('cursor-shadow');
document.body.appendChild(cursorShadow);

document.addEventListener("mousemove", (e) => {
    cursorShadow.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    cursorShadow.style.transition = 'transform 0.1s ease-out';
});



