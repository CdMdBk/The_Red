const arrLineHeadingLeft = document.querySelectorAll('.main__heading-box_margin-right');
const lineHeadingRight = document.querySelector('.main__heading-box_margin-left');
const arrTextHeading = document.querySelectorAll('.main__heading-box_font-left');
const containerForHeading = document.querySelector('.container');

window.addEventListener('resize', function(){
    lineHeadingLeftMargin();
    lineHeadingRightMargin();
    textHeadingMargin();
});

lineHeadingLeftMargin();
lineHeadingRightMargin();
textHeadingMargin();

function lineHeadingLeftMargin() {
    for (let index = 0; index < arrLineHeadingLeft.length; index++) {
        arrLineHeadingLeft[index].style.marginRight = `${container.offsetLeft}px`;
    }
}

function lineHeadingRightMargin() {
    lineHeadingRight.style.marginLeft = `${container.offsetLeft}px`;
}

function textHeadingMargin() {
    for (let index = 0; index < arrLineHeadingLeft.length; index++) {
        arrTextHeading[index].style.marginLeft = `${container.offsetLeft}px`;
    }
}