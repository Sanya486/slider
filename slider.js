let offset = 0;
const sliderLine = document.querySelector('.slider-line');

document.querySelector('.button-right').addEventListener('click', function () {
    offset = offset + 386;
    if (offset > 1544) {
        offset = 0;
    }
    sliderLine.style.right = offset + 'px';
});

document.querySelector('.button-left').addEventListener('click', function () {
    offset = offset - 386;
    if (offset < 0) {
        offset = 0;
    }
    sliderLine.style.right = offset + 'px';
});
