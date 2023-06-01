// Criando constantes para slider
const slider = document.querySelector('.slider');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

// Variáveis de controle do slide
let slidePosition = 0;
let slideWidth = slider.offsetWidth;
let intervalId;

// Função para atualizar a posição do slide
function updateSlidePosition() {
  slider.style.transform = `translateX(${slidePosition}px)`;
}

// Função para mover o slide para o lado esquerdo
function slideToPrev() {
  if (slidePosition === 0) {
    slidePosition = -(slideWidth * (slider.children.length - 1));
  } else {
    slidePosition += slideWidth;
  }
  updateSlidePosition();
}

// Função para mover o slide para o lado direito
function slideToNext() {
  if (slidePosition === -(slideWidth * (slider.children.length - 1))) {
    slidePosition = 0;
  } else {
    slidePosition -= slideWidth;
  }
  updateSlidePosition();
}

// Função para iniciar o slide automático
function startAutoSlide() {
  intervalId = setInterval(slideToNext, 2000);
}

// Função para parar o slide automático
function stopAutoSlide() {
  clearInterval(intervalId);
}

// Função para atualizar a largura do slide ao redimensionar a janela
function updateSlideWidth() {
  slideWidth = slider.offsetWidth;
  slidePosition = 0;
  updateSlidePosition();
}

// Evento de rolagem da página para adicionar classe ao menu
window.addEventListener("scroll", function() {
  var menu = document.querySelector(".menu");
  var scrollPosition = window.scrollY;

  if (scrollPosition > 0) {
    menu.classList.add("translucente");
  } else {
    menu.classList.remove("translucente");
  }
});

// Evento de rolagem da página para alterar a imagem do menu
window.addEventListener("scroll", function() {
  var currentScrollPos = window.pageYOffset;
  var logoReduzida = document.querySelector(".logomarca-reduzida");
  var originalImageSrc = logoReduzida.getAttribute("src");
  var newImageSrc = "Imagens/menu/elemento Globo.svg"; // Substitua pelo caminho da nova imagem que você deseja usar

  if (currentScrollPos > 0) {
    // A página não está no topo
    logoReduzida.setAttribute("src", newImageSrc);
    logoReduzida.style.opacity = "0.8"; // Defina a transparência desejada para o menu quando a página for rolada para baixo
    logoReduzida.classList.add("nova-imagem", "reduzida"); // Adicione a classe 'reduzida' para ajustar o tamanho da imagem
  } else {
    // A página está no topo
    logoReduzida.setAttribute("src", originalImageSrc);
    logoReduzida.style.opacity = "1"; // Define a opacidade total para o menu quando a página estiver no topo
    logoReduzida.classList.remove("nova-imagem", "reduzida"); // Remova a classe 'reduzida' para voltar ao tamanho original
  }
});

// Eventos para parar o slide automático ao interagir com o slider
slider.addEventListener('mousedown', stopAutoSlide);
slider.addEventListener('mouseup', startAutoSlide);

// Evento de redimensionamento da janela para atualizar a largura do slide
window.addEventListener('resize', updateSlideWidth);

// Inicialização do slide
updateSlidePosition();
startAutoSlide();
