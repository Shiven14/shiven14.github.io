document.addEventListener("DOMContentLoaded", function () {
    const experienceTrigger = document.getElementById("experience-trigger");
    const experienceContainer = document.getElementById("experience-container");

    const observerExperience = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                fetch("experience.html")
                    .then(response => response.text())
                    .then(data => {
                        experienceContainer.innerHTML = data;
                        experienceContainer.classList.add("loaded"); // Apply styling after loading
                    })
                    .catch(error => console.error("Error loading experience section:", error));

                observerExperience.unobserve(experienceTrigger);
            }
        });
    });

    observerExperience.observe(experienceTrigger);
});
