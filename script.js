let set = 0;
const slider_Line = document.querySelector('.sliderLine');

document.querySelector('.sliderNext').addEventListener('click', function(){
    set = set + 750;
    if (set > 2250) {
        set = 0;
    }
    slider_Line.style.left = -set + 'px';
});

document.querySelector('.sliderBack').addEventListener('click', function () {
    set = set - 750;
    if (set < 0) {
        set = 2250;
    }
    slider_Line.style.left = -set + 'px';
});