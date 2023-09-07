const arrowLeft = document.querySelector('.portfolio-slider__arrow-left');
const arrowRight = document.querySelector('.portfolio-slider__arrow-right');
const viewingWindow = document.querySelector('.portfolio-slider__viewing-window');
const fullWindow = document.querySelector('.portfolio-slider__full-window');
const arrSliderCard = document.querySelectorAll('.portfolio-slider__card');
let countSliderSection = 0;

window.addEventListener('resize', function(){
    changeSizeFullWindow();
    changeGridFullWindow();
    moveSliderRight();
    checkingVariableCount();
    console.log(countSliderSection);
})

changeSizeFullWindow();
changeGridFullWindow();
moveSliderRight();
checkingVariableCount();

arrowRight.addEventListener('click', function(){
    countSliderSection++;
    moveSliderRight();
});

arrowLeft.addEventListener('click', function(){
    countSliderSection--;
    moveSliderLeft();
});

function changeSizeFullWindow() {
    if (window.screen.width > 992) {
        fullWindow.style.width = `${viewingWindow.offsetWidth*Math.ceil(arrSliderCard.length/2)/3}px`;
    } else if ((window.screen.width < 992) && (window.screen.width > 576)) {
        fullWindow.style.width = `${viewingWindow.offsetWidth*Math.ceil(arrSliderCard.length/2)/2}px`;
    } else if (window.screen.width < 576) {
        fullWindow.style.width = `${viewingWindow.offsetWidth*arrSliderCard.length}px`;
    }
}

function changeGridFullWindow() {
    if (window.screen.width > 576) {
        fullWindow.style.gridTemplateColumns = `repeat(${Math.ceil(arrSliderCard.length/2)}, 1fr)`;
    } else if (window.screen.width < 576) {
        fullWindow.style.gridTemplateColumns = `repeat(${arrSliderCard.length}, 1fr)`;
    }
}

function moveSliderRight() {
    if ((window.screen.width > 992) && (countSliderSection < Math.ceil(arrSliderCard.length/2) - 2)) {
        fullWindow.style.transform = `translate(${-countSliderSection*viewingWindow.offsetWidth/3}px,0)`;
    } else if ((window.screen.width <= 992) && (window.screen.width > 576) && (countSliderSection < Math.ceil(arrSliderCard.length/2) - 1)) {
        fullWindow.style.transform = `translate(${-countSliderSection*viewingWindow.offsetWidth/2}px,0)`;
    } else if ((window.screen.width <= 576) && (countSliderSection < arrSliderCard.length)) {
        fullWindow.style.transform = `translate(${-countSliderSection*viewingWindow.offsetWidth}px,0)`;
    } else {
        countSliderSection--;
    }
}

function moveSliderLeft() {
    if ((window.screen.width > 992) && (countSliderSection >= 0)) {
        fullWindow.style.transform = `translate(${-countSliderSection*viewingWindow.offsetWidth/3}px,0)`;
    } else if ((window.screen.width <= 992) && (window.screen.width > 576) && (countSliderSection >= 0)) {
        fullWindow.style.transform = `translate(${-countSliderSection*viewingWindow.offsetWidth/2}px,0)`;
    } else if ((window.screen.width <= 576) && (countSliderSection >= 0)) {
        fullWindow.style.transform = `translate(${-countSliderSection*viewingWindow.offsetWidth}px,0)`;
    } else {
        countSliderSection++;
    }
}

function checkingVariableCount() {
    if ((window.screen.width > 992) && (countSliderSection >= Math.ceil(arrSliderCard.length/2) - 2)) {
        countSliderSection--;
    } else if ((window.screen.width <= 992) && (window.screen.width > 576) && (countSliderSection >= Math.ceil(arrSliderCard.length/2) - 1)) {
        countSliderSection = Math.ceil(arrSliderCard.length/2) - 2;
    }
}