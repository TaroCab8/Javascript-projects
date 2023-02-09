// document.getElementById("root").style.backgroundColor = "red"

// let count = 0

// let texto = document.getElementById("text")

// function suma () {
    
//         for(let i = 0; i < 10; i++) {
//             setInterval(()=>{
//             count ++
//             console.log(count)
//             texto.innerHTML = count
//     },2000)
//     break
//     }
   
// }
// suma()

// play with canvas
let canvasContainer = document.getElementById("canvas-container")

canvasContainer.style.border = "1px solid black"
canvasContainer.style.height = "1000 px"

let canvas = document.createElement("canvas")
let ctx = canvas.getContext("2d")

ctx.canvas.height = window.innerHeight
ctx.canvas.width = window.innerWidth
canvasContainer.appendChild(canvas)

// some circles
let number = 0
let scale = 10
let hue = Math.random() * 360
function drawFlower () {
    let angle = number * 0.8
    let radius = scale * Math.sqrt(number)
    let positionX = radius * Math.sin(angle) + canvas.width/2
    let positionY = radius * Math.cos(angle) + canvas.height / 2

    ctx.fillStyle = "hsl(" + hue + ", 100%, 50%)"
    ctx.strokeStyle = "black"
    ctx.lineWidth = 5
    ctx.beginPath()
    ctx.arc(positionX, positionY, 15, 0, Math.PI * 2)
    ctx.closePath()
    ctx.fill()
    ctx.stroke()

    number++
    hue+= 0.5
}

function animate() {
    //ctx.clearRect(0,0,canvas.width, canvas.height)
    drawFlower()
    if(number > 800) return
    requestAnimationFrame(animate)
}

animate()



