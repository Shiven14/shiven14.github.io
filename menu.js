document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menu-toggle");
    const fullscreenMenu = document.getElementById("fullscreen-menu");
    const closeMenu = document.getElementById("close-menu");

    menuToggle.addEventListener("click", () => {
        fullscreenMenu.classList.toggle("active");
    });

    closeMenu.addEventListener("click", () => {
        fullscreenMenu.classList.remove("active");
    });

    // Smooth scroll to section inside education.html
    document.querySelectorAll("#fullscreen-menu ul li a").forEach(item => {
        item.addEventListener("click", (event) => {
            event.preventDefault();
            menuContainer.classList.remove("active");

            const sectionID = item.getAttribute("href").split("#")[1];
            if (sectionID) {
                const section = document.getElementById(sectionID);
                if (section) {
                    section.scrollIntoView({ behavior: "smooth" });
                } else {
                    window.location.href = item.getAttribute("href");
                }
            }
        });
    });
});

