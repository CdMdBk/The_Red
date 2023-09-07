const preloader = document.querySelector('.preloader');
let count = 0;

setInterval(startPage, 100);

function startPage() {
    count++;
    if (count > 6) {
        preloader.style.opacity = `0`;
    }
    if (count > 8) {
        preloader.style.display = `none`;
    }
}