const headerContentBox = document.querySelector('.header__content-box');

window.addEventListener('resize', function(){
    headerBlockMarginLeft(headerContentBox);
});

headerBlockMarginLeft(headerContentBox);

function headerBlockMarginLeft(block) {
    if (window.screen.width > 768) {
        block.style.paddingLeft = `calc(${container.offsetLeft}px + var(--bs-gutter-x, 0.75rem))`;
    } else {
        block.style.paddingLeft = 0;
    }
}