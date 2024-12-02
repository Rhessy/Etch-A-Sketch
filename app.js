let container = document.querySelector('.container');
let pixels = [];


for(i=0; i<16; i++){
    pixels[i] = document.createElement('div');
    pixels[i].className = 'pixel';
}

for(i=0; i< 16; i++){
    container.appendChild(pixels[i]);
    console.log('I made it');
}


