const yearEl = document.getElementById("year");

if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

const sectionsToReveal = document.querySelectorAll(".section, .card, .compare-item, .download-card, .screenshot");

sectionsToReveal.forEach((element) => {
  element.setAttribute("data-reveal", "");
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.15,
    rootMargin: "0px 0px -8% 0px"
  }
);

sectionsToReveal.forEach((element) => {
  observer.observe(element);
});
