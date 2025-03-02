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
