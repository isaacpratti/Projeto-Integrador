let currentSlide = 0;
const tempoSlide = 2500; // Intervalo em milissegundos (3 segundos)

function passarSlides(index) {
    const slides = document.querySelectorAll('.carrossel-imagens img');
    const totalSlides = slides.length;

    if (index >= totalSlides) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = totalSlides - 1;
    } else {
        currentSlide = index;
    }

    const offset = -currentSlide * 100;
    document.querySelector('.carrossel-imagens').style.transform = `translateX(${offset}%)`;
}

function moverSlide(step) {
    passarSlides(currentSlide + step);
}

// Inicializa o carrossel mostrando o primeiro slide
passarSlides(currentSlide);

// Avançar slides automaticamente
function comecarCarrossel() {
    setInterval(() => {
        moverSlide(1); // Avança para o próximo slide
    }, tempoSlide);
}

// Inicia o carrossel automático
comecarCarrossel();
