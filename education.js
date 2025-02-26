document.addEventListener("DOMContentLoaded", function () {
    const experienceTrigger = document.getElementById("experience-trigger");
    const experienceContainer = document.getElementById("experience-container");

    if (experienceTrigger && experienceContainer) {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Load experience.html dynamically
                    fetch("experience.html")
                        .then(response => response.text())
                        .then(data => {
                            experienceContainer.innerHTML = data; // ✅ Correct container
                        })
                        .catch(error => console.error("Error loading experience section:", error));

                    // Stop observing after loading once
                    observer.unobserve(experienceTrigger); // ✅ Correct trigger
                }
            });
        });

        observer.observe(experienceTrigger); // ✅ Correct trigger
    } else {
        console.error("🚨 Error: #experience-trigger or #experience-container not found.");
    }
});
