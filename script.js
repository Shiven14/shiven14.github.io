// Sidebar Menu Toggle
function toggleMenu() {
    document.getElementById("sidebar-menu").classList.toggle("active");
}

// Preloader Animation
document.addEventListener("DOMContentLoaded", function () {
    const preloader = document.getElementById("preloader");
    const preloaderTexts = document.querySelectorAll(".preloader-text");
    const fadeOutText = document.querySelector(".fade-out");
    let delay = 500;

    // Show each preloader word one by one
    preloaderTexts.forEach((text, index) => {
        setTimeout(() => {
            text.style.opacity = "1";
            setTimeout(() => {
                text.style.opacity = "0";
            }, 1000); // Word stays for 1.5s
        }, delay);
        delay += 1500;
    });

    // Fade out the final text
    setTimeout(() => {
        fadeOutText.style.opacity = "1";
        setTimeout(() => {
            fadeOutText.style.opacity = "0";
            setTimeout(() => {
                preloader.style.opacity = "0";
                setTimeout(() => {
                    preloader.style.display = "none";
                }, 500);
            }, 1500);
        }, 1500);
    }, delay);
});

// Cube Animation
document.addEventListener("DOMContentLoaded", function () {
    const cube = document.querySelector(".cube");
    if (cube) {
        cube.style.animation = "cubeSpin 10s infinite linear";
    }
});

// Smooth Scroll for Sidebar Links
document.querySelectorAll("#sidebar-menu a").forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const targetSection = document.querySelector(this.getAttribute("href"));
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: "smooth" });
            document.getElementById("sidebar-menu").classList.remove("active"); // Close menu after clicking
        }
    });
});

