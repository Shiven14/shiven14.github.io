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






