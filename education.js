document.addEventListener("DOMContentLoaded", function () {
    const experienceTrigger = document.getElementById("experience-trigger");
    const experienceContainer = document.getElementById("experience-container");

    if (experienceTrigger && experienceContainer) {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    fetch("experience.html")
                        .then(response => response.text())
                        .then(data => {
                            experienceContainer.innerHTML = data;
                        })
                        .catch(error => console.error("Error loading experience section:", error));

                    observer.unobserve(experienceTrigger); // Stop observing after loading once
                }
            });
        });

        observer.observe(experienceTrigger);
    } else {
        console.error("Error: #experience-trigger or #experience-container not found.");
    }
});

