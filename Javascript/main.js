//criando constantes
const slider = document.querySelector('.slider');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let slidePosition = 0;
const slideWidth = slider.offsetWidth;
// criando as funções dinamicas do slide
function updateSlidePosition() {
  slider.style.transform = `translateX(${slidePosition}px)`;
}

function slideToPrev() {
  if (slidePosition === 0) {
    slidePosition = -(slideWidth * (slider.children.length - 1));
  } else {
    slidePosition += slideWidth;
  }
  updateSlidePosition();
}

function slideToNext() {
  if (slidePosition === -(slideWidth * (slider.children.length - 1))) {
    slidePosition = 0;
  } else {
    slidePosition -= slideWidth;
  }
  updateSlidePosition();
}

prevBtn.addEventListener('click', slideToPrev);
nextBtn.addEventListener('click', slideToNext);
