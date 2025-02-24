document.addEventListener("DOMContentLoaded", function() {
    // Preloader
    const preloader = document.getElementById("preloader");
    if (preloader) {
        setTimeout(() => {
            preloader.style.display = "none";
        }, 1500);
    }

    // Sidebar Navigation Toggle
    const menuToggle = document.querySelector(".menu-toggle");
    const sidebarMenu = document.getElementById("sidebar-menu");
    
    if (menuToggle && sidebarMenu) {
        menuToggle.addEventListener("click", function() {
            sidebarMenu.classList.toggle("active");
        });
    }

    // Cursor Shadow Effect
    const cursorShadow = document.createElement("div");
    cursorShadow.classList.add("cursor-shadow");
    document.body.appendChild(cursorShadow);
    
    document.addEventListener("mousemove", (e) => {
        cursorShadow.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
        cursorShadow.style.transition = "transform 0.1s ease-out";
    });

    // Scroll Reveal Animations
    if (typeof ScrollReveal !== "undefined") {
        const sr = ScrollReveal({
            origin: "bottom",
            distance: "50px",
            duration: 1000,
            delay: 300,
            reset: true
        });

        sr.reveal(".hero-content", { interval: 200 });
        sr.reveal(".about-content", { interval: 200 });
        sr.reveal(".portfolio-item", { interval: 200 });
        sr.reveal(".service", { interval: 200 });
        sr.reveal(".contact-form", { interval: 200 });
    }
});




