// Select all navigation elements
const navigationElements = document.querySelectorAll("[data-intern-nav] ul li a");

// Add click event listener to each navigation element
navigationElements.forEach((element) => {
  element.addEventListener("click", (event) => {
    // Remove 'data-state' attribute from all navigation elements
    navigationElements.forEach((element) => {
      element.removeAttribute("data-state");
    });

    const target = event.target;
    target.setAttribute("data-state", "active"); // Set 'data-state' attribute to the clicked element
  });
});

// Create an IntersectionObserver
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const targetId = entry.target.getAttribute("id");

        // Update 'data-state' attribute for navigation elements based on the intersecting section
        navigationElements.forEach((element) => {
          const elementHref = element.getAttribute("href").substring(1);

          if (elementHref === targetId) {
            element.setAttribute("data-state", "active"); // Set 'data-state' attribute for the corresponding navigation element
          } else {
            element.removeAttribute("data-state"); // Remove 'data-state' attribute from other navigation elements
          }
        });
      }
    });
  },
  {
    threshold: 0.75, // Set the threshold for intersection
  }
);

// Select all sections with 'id' attribute
const sections = document.querySelectorAll("article[id]");

// Observe each section for intersection
sections.forEach((section) => {
  observer.observe(section);
});