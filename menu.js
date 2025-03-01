document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menu-toggle");
    const fullscreenMenu = document.getElementById("fullscreen-menu");
    const closeMenu = document.getElementById("close-menu");

    menuToggle.addEventListener("click", () => {
        fullscreenMenu.classList.add("active");
        menuToggle.style.display = "none"; // Hide menu button
    });

    closeMenu.addEventListener("click", () => {
        fullscreenMenu.classList.remove("active");
        menuToggle.style.display = "flex"; // Show menu button again
    });

    // Close menu & smooth scroll to section
    document.querySelectorAll("#fullscreen-menu ul li a").forEach(item => {
        item.addEventListener("click", function (event) {
            event.preventDefault();
            fullscreenMenu.classList.remove("active");
            menuToggle.style.display = "flex"; // Show menu button again

            const sectionID = this.getAttribute("href").split("#")[1];
            if (sectionID) {
                const section = document.getElementById(sectionID);
                if (section) {
                    section.scrollIntoView({ behavior: "smooth" });
                } else {
                    window.location.href = this.getAttribute("href");
                }
            }
        });
    });
});

