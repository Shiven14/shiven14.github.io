// Sidebar Menu Toggle
function toggleMenu() {
    document.getElementById("sidebar-menu").classList.toggle("active");
}

// Close Menu Function
function closeMenu() {
    document.getElementById("sidebar-menu").classList.remove("active");
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

// 3D Wireframe Polygon Animation (Using Three.js)
document.addEventListener("DOMContentLoaded", function () {
    const polygonContainer = document.querySelector(".polygon-container");

    if (polygonContainer) {
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ alpha: true });

        renderer.setSize(300, 300);
        polygonContainer.appendChild(renderer.domElement);

        const geometry = new THREE.IcosahedronGeometry(5, 1);
        const material = new THREE.MeshBasicMaterial({ wireframe: true, color: 0xffffff });
        const polygon = new THREE.Mesh(geometry, material);

        scene.add(polygon);
        camera.position.z = 8;

        function animate() {
            requestAnimationFrame(animate);
            polygon.rotation.x += 0.005;
            polygon.rotation.y += 0.005;
            renderer.render(scene, camera);
        }

        animate();
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

