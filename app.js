let container = document.querySelector('.container');
let pixels = [];
let x = document.getElementById('x');
let y = document.getElementById('y');
let x_value = x.value;
let y_value = y.value;
x.addEventListener('click', ()=>{
    x_value = x.value;
    console.log(x_value);
    let dim = x_value*y_value;
    createEtchASketch();
})

y.addEventListener('click', ()=>{
    y_value = y.value;
    console.log(y_value);
    let dim = x_value*y_value;
    createEtchASketch();

})


let dim = x_value*y_value;







console.log(dim);


function createEtchASketch(){
    let dim = x_value*y_value;

    console.log('I made it to the function and this is the value of dim:' + dim);

    for(i=0; i<dim; i++){
        pixels[i] = document.createElement('div');
        pixels[i].className = 'pixel';
        pixels[i].style.height = 800/y_value +'px';
        pixels[i].style.width = 800/x_value +'px';
        pixels[i].style.backgroundcolor = 'red';
    }
    
    
    
    
    for(i=0; i< dim; i++){
        container.appendChild(pixels[i]);
        console.log('I made it');
    }
}






