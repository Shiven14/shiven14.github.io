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
            event.preventDefault(); // Prevent default page refresh

            const targetSection = item.getAttribute("href");

            if (targetSection.includes("education.html#")) {
                // Navigate to the education page first
                window.location.href = targetSection;
            } else {
                // If already on education.html, scroll to section
                const sectionID = targetSection.split("#")[1];
                const section = document.getElementById(sectionID);
                
                if (section) {
                    section.scrollIntoView({ behavior: "smooth" });
                }
            }

            // Close the menu after clicking
            fullscreenMenu.classList.remove("active");
        });
    });
});



