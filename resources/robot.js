slideIndex = 1;

let timer = () => plusSlides(1)

let cleaner = () => {
    var slideArray = document.querySelectorAll(".slide")
    for (i = 0; i < slideArray.length; i++) {
        slideArray[i].classList.remove('visible')
    }
    slideArray[0].classList.add('visible')
}

var clean = cleaner();

var timingAsset = setInterval(timer, 15000);

var next = document.querySelectorAll(".next")[0];
next.addEventListener('click', () => plusSlides(1))

var next = document.querySelectorAll(".prev")[0];
next.addEventListener('click', () => plusSlides(-1))

var tooltipMenu = document.querySelectorAll(".tooltip-menu")[0];
tooltipMenu.addEventListener('mouseover', () => activeMenu())

function activeMenu() {
    var tooltip = document.querySelectorAll(".tooltip")[0];
    tooltip.classList.add("visible");
}

tooltipMenu.addEventListener('mouseout', () => closeMenu())

function closeMenu() {
    var tooltip = document.querySelectorAll(".tooltip")[0];
    tooltip.classList.remove("visible");
}

function plusSlides(index) {
    carrousel(slideIndex += index);
    clearInterval(timingAsset)
    timingAsset = setInterval(timer, 15000);
}

function carrousel(index) {
    var i;
    var slideArray = document.querySelectorAll(".slide")
    if (index > slideArray.length) { slideIndex = 1 }
    if (index < 1) { slideIndex = slideArray.length }

    for (i = 0; i < slideArray.length; i++) {
        slideArray[i].classList.remove('visible')
    }

    var finalIndex = slideIndex - 1;
    slideArray[finalIndex].classList.add("visible");
    changeTitle(finalIndex)
    console.log(finalIndex)
}

function changeTitle(index) {
    var title = document.querySelectorAll(".title")[0]
    var subtitle = document.querySelectorAll(".subtitle")[0]
    var link = document.querySelectorAll(".goToForm")[0]

    switch (index) {
        case 0:
            title.innerHTML = "YOLOCOBI CRAFTS ARTS";
            subtitle.innerHTML = "Deja la cratividad en nuestras manos, y desarrolla tus proyectos con nuestro servicio de creación de contenido artístico. Infórmate aquí sobre nuestros trabajos en el área de proyectos visuales.";
            link.action = "https://facebook.com";
            break;
        case 1:
            title.innerHTML = "YOLOCOBI CRAFTS MUSIC";
            subtitle.innerHTML = "La música apropiada lo cambia todo. Permite que nuestro equipo cree esa canción perfecta para tu proyecto. Infórmate aquí sobre nuestros trabajos en el área de proyectos musicales."
            link.action = "https://google.com";
            break;
        case 2:
            title.innerHTML = "YOLOCOBI CRAFTS GAMES";
            subtitle.innerHTML = "Conéctate con nosotros y descubre la variedad de juegos desarrollados por nuestro equipo de trabajo. Infórmate aquí sobre nuestros trabajos en el área de proyectos de vídeo juegos."
            link.action = "https://instagram.com";
            break;
        case 3:
            title.innerHTML = "YOLOCOBI CRAFTS TECH";
            subtitle.innerHTML = "Haz realidad esas soluciones que abrirán el camino de tu proyecto hacia el éxito con nuestro equipo de desarrollo. Infórmate aquí sobre nuestros trabajos en el área de proyectos de software."
            link.action = "https://twitter.com";
            break;
        default:
        // code block
    }
}