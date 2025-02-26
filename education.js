document.addEventListener("DOMContentLoaded", function () {
    const experienceTrigger = document.getElementById("experience-trigger");
    const experienceContainer = document.getElementById("experience-container");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Load experience.html dynamically
                fetch("experience.html")
                    .then(response => response.text())
                    .then(data => {
                        educationContainer.innerHTML = data;
                    })
                    .catch(error => console.error("Error loading education section:", error));

                // Stop observing after loading once
                observer.unobserve(scrollTrigger);
            }
        });
    });

    observer.observe(scrollTrigger);
});
