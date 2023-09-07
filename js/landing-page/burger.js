const navUl = document.querySelector('.nav-ul');
const container = document.querySelector('.container');
const burger = document.querySelector('.burger');
const arrNavLi = document.querySelectorAll('.nav-ul__list');
const nav = document.querySelector('.nav');
let countInactionScroll = 0;
let windowScrollYStart, windowScrollYFinish;
let mousePositionY;

window.addEventListener('resize', function(){
    navUlBlockMarginLeft(navUl);
    navActiveRemove();
});

navUlBlockMarginLeft(navUl);
navActiveRemove();
navOpacity();

burger.addEventListener('click', navCalling);

for (let index = 0; index < arrNavLi.length; index++) {
    arrNavLi[index].addEventListener('click', navRemoveClickLink);
}

document.body.onmousemove = getCursorPosition;

setInterval(function() {
    countInactionScrollCheck();
    navDisappearance();
    navOpacity();
}, 100);

function navUlBlockMarginLeft(block) {
    if (window.screen.width < 768) {
        block.style.paddingLeft = `calc(${container.offsetLeft}px + var(--bs-gutter-x, 0.75rem))`;
    } else {
        block.style.paddingLeft = `calc(var(--bs-gutter-x, 0.75rem)/2)`;
    }
}

function navOpacity() {
    if (navUl.classList[4] !== `nav-ul_active`) {
        if ((window.scrollY < 40) && (window.screen.width < 768)) {
            nav.style.backgroundColor = 'initial';
        } else {
            nav.style.backgroundColor = `var(--main-color)`;
        }
    } else {
        nav.style.backgroundColor = `var(--main-color)`;
    }
    
    
}

function navActiveRemove() {
    if (window.screen.width > 768) {
        navUl.classList.remove('nav-ul_active');
        document.body.classList.remove('body_no-scroll');
    }
}

function navCalling() {
    navUl.classList.toggle('nav-ul_active');
    document.body.classList.toggle('body_no-scroll');
}

function navRemoveClickLink() {
    navUl.classList.remove('nav-ul_active');
    document.body.classList.remove('body_no-scroll');
}

function navDisappearance() {
    if ((window.screen.width > 768) && (mousePositionY > 70)) {
        if (countInactionScroll === 1) {
            windowScrollYStart = window.scrollY;
        } else if (countInactionScroll === 9) {
            windowScrollYFinish = window.scrollY;
        }

        if ((windowScrollYStart === windowScrollYFinish) && (windowScrollYFinish > 210)) {
            nav.style.opacity = `0`;
            countInactionScroll = 0;
        } else {
            nav.style.opacity = `1`;
        }
    } else {
        nav.style.opacity = `1`;
    }
}

function countInactionScrollCheck() {
    countInactionScroll++;
    if (countInactionScroll === 10) {
        countInactionScroll = 0;
    }
}

function getCursorPosition(event) {
    mousePositionY = event.clientY;
    return mousePositionY;
}