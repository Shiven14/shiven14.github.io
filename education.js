document.addEventListener("DOMContentLoaded", function () {
    const scrollTrigger = document.getElementById("scroll-trigger");
    const experienceContainer = document.getElementById("experience-container");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Load experience.html dynamically
                fetch("experience.html")
                    .then(response => response.text())
                    .then(data => {
                        experienceContainer.innerHTML = data;
                    })
                    .catch(error => console.error("Error loading experience section:", error));

                // Stop observing after loading once
                observer.unobserve(scrollTrigger);
            }
        });
    });

    observer.observe(scrollTrigger);
});
