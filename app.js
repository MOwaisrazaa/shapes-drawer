
let previousShape = null
let topValue = null
let leftValue = null
activeColor = null
let activeShape = ""


function clickShape(div) {

    div.style.backgroundColor = "green"
    if (previousShape != null) {
        previousShape.style.background = "transparent"
        previousShape.style.borderWidth = "1px"
        previousShape.style.borderColor = "black"
    }
    previousShape = div
    div.style.borderWidth = "2px"
    div.style.borderColor = "white"
    activeShape = div.id
    // console.log(div.id)

}
function clickColor(div){
    if(previousShape){
        previousShape.style.border = "1px solid black"
        previousShape.style.backgroundColor = "transparent"
    } 
    if(activeShape != "") activeShape = ""
    
    div.style.border = "2px solid black"
    activeColor = div.id
    console.log(activeColor)
    
}

    function drawShape(div, { x, y }) {
        // topValue = y;
    // leftValue = x;
    // console.log(x,y,activeShape)   
    if(activeShape == ""){
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!",
        });
    } else{
        
        let bg = `rgba(${color()},${color()},${color()},0.5)`
        div.innerHTML += `<div onclick="changeColor(this)" class="shapes ${activeShape}" style="position: absolute; top:${y}px;
        left:${x}px; height: 100px; width: 100px; background-color: ${bg};">
        </div>`
    console.log(activeShape)


    }

}

function color(){
    return Math.round(Math.random() * 257)
}

function changeColor(div){
    div.style.backgroundColor = activeColor
}