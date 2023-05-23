"use strict"

// ARRAY
let images = ['img/01.webp', 'img/02.webp', 'img/03.webp', 'img/04.webp', 'img/05.webp'];

// VARIABILI
let slider_class= document.querySelector('.sliders');
let slider_content = '';

// CICLO FOR
for(let i=0; i<images.length; i++){
    let current_image = images[i];
    slider_content += `<div class="slider"> <img src="${current_image}"> </div>`;
}

// INNER HTML
slider_class.innerHTML= slider_content;

// ADD CLASS
let all_sliders= document.getElementsByClassName('slider');

let visual_element= 0;
all_sliders[visual_element].classList.add('visual');

// QUERY SELECTOR FOR BUTTON
let prev= document.querySelector('.prev');
let next= document.querySelector('.next');

// EVENT LISTENER
prev.addEventListener ('click', function(){
    if(visual_element < (images.length - 1)){
        all_sliders[visual_element].classList.remove('visual');
        visual_element++;
        all_sliders[visual_element].classList.add('visual');
    }
})

next.addEventListener('click', function(){
    if(visual_element > 0){
        all_sliders[visual_element].classList.remove('visual');
        visual_element--;
        all_sliders[visual_element].classList.add('visual');
    }
})