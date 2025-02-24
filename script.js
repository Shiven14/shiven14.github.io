document.addEventListener("DOMContentLoaded", function() {
    // Sidebar Navigation Toggle
    const menuToggle = document.querySelector(".menu-toggle");
    const sidebarMenu = document.getElementById("sidebar-menu");
    
    if (menuToggle && sidebarMenu) {
        menuToggle.addEventListener("click", function() {
            sidebarMenu.classList.toggle("active");
        });
    }

    // Background Cube Animation Logic
    const backgroundCubes = document.querySelector(".background-cubes");
    if (backgroundCubes) {
        let moveCubes = () => {
            let x = Math.random() * 10 - 5;
            let y = Math.random() * 10 - 5;
            backgroundCubes.style.transform = `translate(${x}px, ${y}px)`;
        };
        setInterval(moveCubes, 1000);
    }

    // Scroll Reveal Animations
    if (typeof ScrollReveal !== "undefined") {
        ScrollReveal().reveal(".hero-content", { origin: "bottom", distance: "50px", duration: 1000, delay: 300, reset: true });
        ScrollReveal().reveal(".btn-primary", { origin: "bottom", distance: "30px", duration: 800, delay: 500, reset: true });
        ScrollReveal().reveal(".scroll-down", { origin: "bottom", distance: "30px", duration: 800, delay: 700, reset: true });
    }

    // Preloader Animation
    const preloader = document.getElementById("preloader");
    const words = ["Innovative", "Problem Solver", "Developer", "shivenhpatel.com"];
    const preloaderText = document.createElement("div");
    preloaderText.classList.add("preloader-text");
    preloader.appendChild(preloaderText);

    let index = 0;
    function showNextWord() {
        if (index < words.length) {
            preloaderText.textContent = words[index];
            preloaderText.classList.toggle("bold", index === 1);
            preloaderText.style.opacity = "1";
            setTimeout(() => {
                preloaderText.style.opacity = "0";
                index++;
                setTimeout(showNextWord, 500);
            }, 1500);
        } else {
            preloader.style.opacity = "0";
            setTimeout(() => {
                preloader.style.display = "none";
                document.getElementById("home").style.opacity = "1";
            }, 500);
        }
    }
    showNextWord();
});

