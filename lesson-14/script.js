const slides = document.querySelectorAll(".slide");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const dotsContainer = document.querySelector(".dots-container");

let currentSlide = 0;

function showSlide(newIndex, direction = 1) {
  if (newIndex === currentSlide) return;

  const current = slides[currentSlide];
  const next = slides[newIndex];

  slides.forEach((slide) =>
    slide.classList.remove("active", "to-left", "to-right")
  );

  if (direction === 1) {
    current.classList.add("to-left");
  } else {
    current.classList.add("to-right");
  }

  next.classList.add("active");

  [...dotsContainer.children].forEach((dot, i) => {
    dot.classList.toggle("active", i === newIndex);
  });

  prevBtn.disabled = newIndex === 0;
  nextBtn.disabled = newIndex === slides.length - 1;

  currentSlide = newIndex;
}

function createDots() {
  slides.forEach((_, i) => {
    const dot = document.createElement("span");
    dot.classList.add("dot");
    dot.addEventListener("click", () => {
      const direction = i > currentSlide ? 1 : -1;
      showSlide(i, direction);
    });
    dotsContainer.appendChild(dot);
  });
}

prevBtn.addEventListener("click", () => {
  if (currentSlide > 0) {
    showSlide(currentSlide - 1, -1);
  }
});

nextBtn.addEventListener("click", () => {
  if (currentSlide < slides.length - 1) {
    showSlide(currentSlide + 1, 1);
  }
});

createDots();
showSlide(currentSlide);
