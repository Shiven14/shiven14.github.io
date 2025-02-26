document.addEventListener("DOMContentLoaded", function () {
    console.log("education.js is running!");

    const experienceTrigger = document.getElementById("experience-trigger");
    const experienceContainer = document.getElementById("experience-container");

    if (experienceTrigger && experienceContainer) {
        console.log("Experience trigger found!", experienceTrigger);

        const observerExperience = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    console.log("Scroll Trigger Detected! Loading experience.html...");

                    fetch("experience.html")
                        .then(response => {
                            if (!response.ok) {
                                throw new Error("Failed to load experience.html, Status: " + response.status);
                            }
                            return response.text();
                        })
                        .then(data => {
                            console.log("Experience HTML loaded successfully.");
                            experienceContainer.innerHTML = data;
                        })
                        .catch(error => console.error("Error loading experience section:", error));

                    observerExperience.unobserve(experienceTrigger);
                }
            });
        });

        observerExperience.observe(experienceTrigger);
    } else {
        console.error("Error: #experience-trigger or #experience-container not found in education.html");
    }
});
