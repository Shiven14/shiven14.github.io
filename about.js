document.addEventListener("DOMContentLoaded", function () {
    const scrollTrigger = document.getElementById("scroll-trigger");
    const educationContainer = document.getElementById("education-container");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Load education.html dynamically
                fetch("education.html")
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
