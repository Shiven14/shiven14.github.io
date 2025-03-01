document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menu-toggle");
    const sidebarMenu = document.getElementById("sidebar-menu");
    const closeMenu = document.getElementById("close-menu");

    menuToggle.addEventListener("click", () => {
        sidebarMenu.classList.toggle("active");
    });

    closeMenu.addEventListener("click", () => {
        sidebarMenu.classList.remove("active");
    });

    // Close menu when clicking any menu item
    document.querySelectorAll("#sidebar-menu ul li a").forEach(item => {
        item.addEventListener("click", () => {
            sidebarMenu.classList.remove("active");
        });
    });
});
