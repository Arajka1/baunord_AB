// main.js – JS për slider dhe scroll

// ==== Smooth Scroll për navbar ====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// ==== Optional: Slider Manual (future proof) ====
// E ke automatik me CSS (slider autoplay) – kjo është vetëm si backup.

const slides = document.querySelector('.slides');
let index = 0;

function moveSlide() {
  index++;
  if (index >= slides.children.length) index = 0;
  slides.style.transform = `translateX(-${index * 100}%)`;
}

setInterval(moveSlide, 6000);
