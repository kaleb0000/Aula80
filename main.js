var canva = document.getElementById("can")

var ctx = canva.getContext("2d")

var color = "darkblue"

canva.addEventListener("mousedown",mymousedown)

function mymousedown(e){
    mouseX = e.clientX-canva.offsetLeft
    mouseY = e.clientY-canva.offsetTop

    circle(mouseX,mouseY)
}

function circle(){
    ctx.beginPath()
    ctx.strokeStyle = color
    ctx.lineWidth = 100
    ctx.arc(mouseX,mouseY,40,0,2*Math.PI)
    ctx.stroke()
}