const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

document.querySelectorAll("[data-carousel]").forEach((carousel) => {
  const track = carousel.querySelector("[data-track]");
  const prev = carousel.querySelector(".prev");
  const next = carousel.querySelector(".next");
  if (!track || !prev || !next) return;

  const getStep = () => {
    const image = track.querySelector("img");
    return image ? image.getBoundingClientRect().width + 12 : 220;
  };

  prev.addEventListener("click", () => {
    track.scrollBy({ left: -getStep() * 2, behavior: "smooth" });
  });

  next.addEventListener("click", () => {
    track.scrollBy({ left: getStep() * 2, behavior: "smooth" });
  });
});

const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const lightboxClose = document.querySelector(".lightbox__close");

const openLightbox = (image) => {
  if (!lightbox || !lightboxImg) return;
  lightboxImg.src = image.src;
  lightboxImg.alt = image.alt || "Vista ampliada";
  lightbox.classList.add("is-open");
  lightbox.setAttribute("aria-hidden", "false");
  document.body.classList.add("lightbox-open");
};

const closeLightbox = () => {
  if (!lightbox || !lightboxImg) return;
  lightbox.classList.remove("is-open");
  lightbox.setAttribute("aria-hidden", "true");
  lightboxImg.src = "";
  document.body.classList.remove("lightbox-open");
};

document.querySelectorAll(".showcase-track img").forEach((image) => {
  image.addEventListener("click", () => openLightbox(image));
});

if (lightboxClose) lightboxClose.addEventListener("click", closeLightbox);

if (lightbox) {
  lightbox.addEventListener("click", (event) => {
    if (event.target === lightbox) closeLightbox();
  });
}

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeLightbox();
});
