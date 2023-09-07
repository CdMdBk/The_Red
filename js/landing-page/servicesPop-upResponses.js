const arrArrowDown = document.querySelectorAll('.services-block_arrow-down');
const arrServicesBlock = document.querySelectorAll('.services-block');
const arrServicesAnswer = document.querySelectorAll('.services-block__answer');
const arrServicesQuestion = document.querySelectorAll('.services-block__question');

window.addEventListener('resize', ServicesBlockHeight);

for (let index = 0; index < arrArrowDown.length; index++) {
    arrServicesQuestion[index].addEventListener('click', function(){
        arrArrowDown[index].classList.toggle('services-block_arrow-top');
        if (arrArrowDown[index].classList[2] === 'services-block_arrow-top') {
            arrServicesBlock[index].style.height = `calc(70px + ${arrServicesAnswer[index].offsetHeight}px)`;
        } else {
            arrServicesBlock[index].style.height = `70px`;
        }
    });
}

function ServicesBlockHeight() {
    for (let index = 0; index < arrArrowDown.length; index++) {
        if (arrArrowDown[index].classList[2] === 'services-block_arrow-top') {
            arrServicesBlock[index].style.height = `calc(70px + ${arrServicesAnswer[index].offsetHeight}px)`;
        }
    }
}