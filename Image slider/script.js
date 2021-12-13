let image=document.getElementsByClassName("slide")
console.log(image)



image[4].style.display="block"
console.log(image.length)
let numb = document.querySelectorAll(".num")
let previous = document.querySelector(".pre") 
let next = document.querySelector(".neext") 

function Count(X){
    display(X)
}
numb.addEven

function display(X){ 
    var i =0;
    for(i;i<image.length;i++){
        image[i].style.display="none"
    }
    
    image[X].style.display="block"

    
}


