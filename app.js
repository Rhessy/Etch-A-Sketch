
//decalre variable to be set the the element "container"
let container = document.querySelector('.container');

//declare and instantiate an empty array of pixles
let pixels = [];

//declare borth x and y to be set to the elements x and y values which are editable by the user 
let xy = document.getElementById('xy');

//set the values of x and y respectively to x_value and y_value
let xy_value = 16;

let dim = xy_value**2;

let clear = document.querySelector('.clear');


//Adding in event listeners for both x and y in order to update the values when the user changes the drop down value
xy.addEventListener('change', ()=>{
    xy_value = xy.value;
    console.log(xy_value);
    let dim = xy_value**2;
    console.log(dim);
    updateEtchASketch(dim);
   // deleteEtchASketch(dim);


})

//clear event listener
clear.addEventListener('click', ()=>{
    pixels.forEach((element)=>{
        element.style.backgroundColor = 'white';
            
       })
})

//Declaring and initializing dim to be equal to x by y 




//function that will use a for loop too create div elements and fill the array with each element. 
function updateEtchASketch(dim){
    console.log("This is dim:"+dim);
    let length = pixels.length-1;
    let side = dim/xy_value;
    
    for(i=length; i>=0; i--){

        pixels[i].remove();
    }
    
    CreateEtchASketh(dim);
         
  // CreateEtchASketh(dim)
}

function changeBakcground(e){
    e.currentTarget.style.beckgroundcolor = 'red';
}


function CreateEtchASketh(dim){
    console.log("This is dim:"+dim);
    console.log("this is the value of length:" +length);
    //for the size of the Etch-A-Sketch create enough pixels to fit 
        for(i=0; i<dim; i++){        
            pixels[i] = document.createElement('div');
            pixels[i].className = `pixel${i} pixel`;
            pixels[i].style.height = 600/xy_value +'px';
            pixels[i].style.width = 600/xy_value +'px';
            //console.log("this is pixels of i: " + pixels[i].value);
    
            
        }
        
        for(i=0; i< dim; i++){
            container.appendChild(pixels[i]);
        }
        
      //  for all pixels add a mouseover event listener for each element in the node list

   /* 
   this for loop effectively works the same as the foreach loop below, but it dosen't work in changing the backgorundColor.  TBD what is causing this...

   for(i=0; i<dim; i++){
       
        pixels[i].addEventListener('mouseover', ()=>{
        pixels[i].style.backgroundColor = 'red';
        console.log("This is the value of pixel: "+ pixels[i]);
       })
    }*/

    


       pixels.forEach((element)=>{
        //console.log(element);
            element.addEventListener('mouseover', ()=>{
                element.style.backgroundColor = 'red';
            })
       })
        
}

console.log("This is dim:"+dim);
CreateEtchASketh(dim);

