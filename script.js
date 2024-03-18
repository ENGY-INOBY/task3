let set = 0;
const slider_Line = document.querySelector('.sliderLine');
const carousel1 = document.querySelector('.carousel');
const el1 = document.querySelector('label.carouselItem1')
const el2 = document.querySelector('label.carouselItem2')
const el3 = document.querySelector('label.carouselItem3')
const el4 = document.querySelector('label.carouselItem4')
document.querySelector('.sliderNext').addEventListener('click', function(){
    set = set + 750;
    if (set > 2250) {
        set = 0;
    }
    slider_Line.style.left = -set + 'px';
   
});
document.querySelector('.sliderNext').addEventListener('click', ping)

document.querySelector('.sliderBack').addEventListener('click', function () {
    set = set - 750;
    if (set < 0) {
        set = 2250;
    }
    slider_Line.style.left = -set + 'px';
});
document.querySelector('.sliderBack').addEventListener('click', ping);

el1.onclick = function(){
   set = 0;
   slider_Line.style.left = -set + 'px';
}   
el2.onclick = function(){
    set = 750;
    slider_Line.style.left = -set + 'px';
}
el3.onclick = function(){
    set = 1500;
    slider_Line.style.left = -set + 'px';
}  
el4.onclick = function(){
    set = 2250;
    slider_Line.style.left = -set + 'px';
 }  
function ping (){
    if (set == 0){
        el1.style.opacity = '1';
    };
    if (set !== 0){
        el1.style.opacity = '0.5';
    };
    if (set == 750){
        el2.style.opacity = '1';
    };
    if (set !== 750){
        el2.style.opacity = '0.5';
    };

    if (set == 1500){
        el3.style.opacity = '1';
    };
    if (set !== 1500){
        el3.style.opacity = '0.5';
    };

    if (set == 2250){
        el4.style.opacity = '1';
    };
    if (set !== 2250){
        el4.style.opacity = '0.5';
    };
};
 

