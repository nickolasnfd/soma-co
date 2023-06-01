// Criando constantes
const slider = document.querySelector('.slider');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let slidePosition = 0;
let slideWidth = slider.offsetWidth;
let intervalId;

// Funções dinâmicas do slide
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

// Evento de rolagem da página para alterar a imagem do menu
let isLogoChanged = false;
let originalImageSrc = "";

window.addEventListener("scroll", function () {
  var menu = document.querySelector(".menu");
  var scrollPosition = window.scrollY;

  if (scrollPosition > 0) {
    menu.classList.add("translucente");
  } else {
    menu.classList.remove("translucente");
  }
});

window.addEventListener("scroll", function () {
  var currentScrollPos = window.pageYOffset;
  var logoReduzida = document.querySelector(".logomarca-reduzida");

  if (currentScrollPos > 0 && !isLogoChanged) {
    originalImageSrc = logoReduzida.getAttribute("src");
    var newImageSrc = "Imagens/menu/elemento Globo.svg"; // Substitua pelo caminho da nova imagem que você deseja usar

    logoReduzida.setAttribute("src", newImageSrc);
    logoReduzida.style.opacity = "0.8";
    logoReduzida.classList.add("nova-imagem", "reduzida");

    isLogoChanged = true;
  }

  if (currentScrollPos === 0 && isLogoChanged) {
    logoReduzida.setAttribute("src", originalImageSrc);
    logoReduzida.style.opacity = "1";
    logoReduzida.classList.remove("nova-imagem", "reduzida");

    isLogoChanged = false;
  }
});

slider.addEventListener('mousedown', stopAutoSlide);
slider.addEventListener('mouseup', startAutoSlide);
window.addEventListener('resize', updateSlideWidth);

updateSlidePosition();
startAutoSlide();
