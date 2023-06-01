//criando constantes
const slider = document.querySelector('.slider');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');


let slidePosition = 0;
let slideWidth = slider.offsetWidth;
let intervalId;
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
function startAutoSlide() {
  intervalId = setInterval(slideToNext, 2000);
}

function stopAutoSlide() {
  clearInterval(intervalId);
}
function updateSlideWidth() {
  slideWidth = slider.offsetWidth;
  slidePosition = 0;
  updateSlidePosition();
}

slider.addEventListener('mousedown', stopAutoSlide);
slider.addEventListener('mouseup', startAutoSlide);
window.addEventListener('resize', updateSlideWidth);

updateSlidePosition();
startAutoSlide();

//PARA DEIXAR O SLIDER FULL AUTOMATICO 
// function startSlideShow() {
//   setInterval(slideToNext, 2000); // Altere o valor aqui para ajustar o tempo de transição
// }

// PARA SE QUISER USAR SLIDER COM BOTOES
// prevBtn.addEventListener('click', slideToPrev); 
// nextBtn.addEventListener('click', slideToNext);
// startSlideShow();