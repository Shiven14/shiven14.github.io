// Preloader Animation
document.addEventListener("DOMContentLoaded", function () {
    const preloader = document.getElementById("preloader");
    const preloaderTexts = document.querySelectorAll(".preloader-text");
    const fadeOutText = document.querySelector(".fade-out");
    let delay = 500;

    preloaderTexts.forEach((text, index) => {
        setTimeout(() => {
            text.style.opacity = "1";
            setTimeout(() => {
                text.style.opacity = "0";
            }, 1000); 
        }, delay);
        delay += 1500;
    });

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

// Polygon Background Animation (Three.js)
document.addEventListener("DOMContentLoaded", function () {
    const polygonContainer = document.querySelector(".polygon-container");

    if (polygonContainer) {
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.position.z = 8;

        const renderer = new THREE.WebGLRenderer({ alpha: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        polygonContainer.appendChild(renderer.domElement);

        const geometry = new THREE.IcosahedronGeometry(4, 1);
        const material = new THREE.MeshBasicMaterial({ wireframe: true, color: 0xffffff });
        const polygon = new THREE.Mesh(geometry, material);
        scene.add(polygon);

        polygon.position.set(0, 0, 0);

        function animate() {
            requestAnimationFrame(animate);
            polygon.rotation.x += 0.003;
            polygon.rotation.y += 0.003;
            renderer.render(scene, camera);
        }

        animate();

        window.addEventListener("resize", () => {
renderer.setSize(window.innerWidth, window.innerHeight);
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
        });
    }
});


document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menu-toggle");
    const fullscreenMenu = document.getElementById("fullscreen-menu");
    const closeMenu = document.getElementById("close-menu");

    // Open the menu
    menuToggle.addEventListener("click", () => {
        fullscreenMenu.classList.add("active");
        menuToggle.style.display = "none"; // Hide menu button
    });

    // Close the menu
    closeMenu.addEventListener("click", () => {
        fullscreenMenu.classList.remove("active");
        menuToggle.style.display = "flex"; // Show menu button again
    });

    // Smooth scrolling to sections
    document.querySelectorAll("#fullscreen-menu ul li a").forEach(item => {
        item.addEventListener("click", function (event) {
            event.preventDefault();
            fullscreenMenu.classList.remove("active");
            menuToggle.style.display = "flex"; // Show menu button again

            const target = this.getAttribute("href");

            // Check if user is already on education.html
            if (window.location.pathname.includes("education.html")) {
                const sectionID = target.split("#")[1]; // Extract section ID (e.g., "projects")
                const section = document.getElementById(sectionID);

                if (section) {
                    section.scrollIntoView({ behavior: "smooth" }); // Scroll to section
                }
            } else {
                // Redirect to education.html with section ID
                window.location.href = target;
            }
        });
    });

    // Scroll to section if URL already contains a hash (e.g., education.html#projects)
    if (window.location.hash) {
        const sectionID = window.location.hash.substring(1); // Remove "#"
        const section = document.getElementById(sectionID);

        if (section) {
            setTimeout(() => {
                section.scrollIntoView({ behavior: "smooth" });
            }, 500); // Delay to ensure page is fully loaded before scrolling
        }
    }
});




