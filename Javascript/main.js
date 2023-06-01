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
window.addEventListener("scroll", function () {
  var menu = document.querySelector(".menu");
  var scrollPosition = window.scrollY;

  if (scrollPosition > 0) {
    menu.classList.add("translucente");
  } else {
    menu.classList.remove("translucente");
  }
});

var logoReduzida = document.querySelector(".logomarca-reduzida");
var originalImageSrc = logoReduzida.getAttribute("src");
var newImageSrc = "Imagens/menu/elemento Globo.svg"; // Substitua pelo caminho da nova imagem que você deseja usar

window.addEventListener("scroll", function() {
  var currentScrollPos = window.pageYOffset;

  if (currentScrollPos > 0) {
    // A página não está no topo
    logoReduzida.setAttribute("src", newImageSrc);
    logoReduzida.style.opacity = "0.8"; // Defina a transparência desejada para o menu quando a página for rolada para baixo
    logoReduzida.classList.add("nova-imagem");

  } else {
    // A página está no topo
    logoReduzida.setAttribute("src",originalImageSrc);
    logoReduzida.style.opacity = "1"; // Define a opacidade total para o menu quando a página estiver no topo
    logoReduzida.classList.remove("nova-imagem");
  }
});


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