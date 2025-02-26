document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const sidebarMenu = document.getElementById("sidebar-menu");

    // Sidebar Toggle Function
    function toggleMenu() {
        sidebarMenu.classList.toggle("active");
    }

    // Attach click event only once
    menuToggle.addEventListener("click", toggleMenu);

    // Close menu when clicking outside
    document.addEventListener("click", function (event) {
        if (!sidebarMenu.contains(event.target) && !menuToggle.contains(event.target)) {
            sidebarMenu.classList.remove("active");
        }
    });
});

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

       // 3D Wireframe Polygon Animation (Using Three.js)
document.addEventListener("DOMContentLoaded", function () {
    const polygonContainer = document.querySelector(".polygon-container");

    if (polygonContainer) {
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.position.z = 8; // Adjust depth to center better

        // Renderer setup
        const renderer = new THREE.WebGLRenderer({ alpha: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        polygonContainer.appendChild(renderer.domElement);

        // Create polygon geometry
        const geometry = new THREE.IcosahedronGeometry(3, 1);
        const material = new THREE.MeshBasicMaterial({ wireframe: true, color: 0xffffff });
        const polygon = new THREE.Mesh(geometry, material);
        scene.add(polygon);

        // Animation loop
        function animate() {
            requestAnimationFrame(animate);
            polygon.rotation.x += 0.003;
            polygon.rotation.y += 0.003;
            renderer.render(scene, camera);
        }

        animate();

        // Adjust canvas on window resize
        window.addEventListener("resize", () => {
            const newWidth = window.innerWidth;
            const newHeight = window.innerHeight;
            renderer.setSize(newWidth, newHeight);
            camera.aspect = newWidth / newHeight;
            camera.updateProjectionMatrix();
        });
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

