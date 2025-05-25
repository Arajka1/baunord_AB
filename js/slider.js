// slider.js – auto slide pa ndërhyrje manuale

const slides = document.querySelector('.slides');
let index = 0;

function moveSlide() {
  index++;
  if (index > 3) index = 0; // kemi 4 foto
  slides.style.transform = `translateX(-${index * 100}%)`;
}

// çdo 5 sekonda kalon slajdi
setInterval(moveSlide, 5000);
