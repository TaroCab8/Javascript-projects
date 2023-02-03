//global var
let numberBtn = document.querySelectorAll(".nBtn");
let pantalla = document.getElementById("show");
const eraser = document.getElementById("eraser");
const sum = document.getElementById("add");
const substract = document.getElementById("minus");
const equals = document.getElementById("equal");

let operator;

//const numbers = [0, 1, 3, 4, 5, 6, 7, 8, 9];
//const operators = ["+", "-", "*", "/", "=", "()"];

//get buttons id & print buttons on input screen

function typeOnScreen() {
  for (var i = 0; i <= numberBtn.length - 1; i++) {
    numberBtn[i].addEventListener("click", function() {
      pantalla.textContent = pantalla.textContent + this.innerHTML;
      localStorage.setItem("value", pantalla.textContent);
    });
  }
}

typeOnScreen();

// sum

function addition() {
  sum.addEventListener("click", function() {
    const sumando = localStorage.value;
    localStorage.setItem("sumando", sumando);
    let operator = true;
    pantalla.textContent = "";
  });
}

addition();

// subtract
function resta() {
  substract.addEventListener("click", function() {
    const restando = localStorage.value;
    localStorage.setItem("restando", restando);
    let operator = false;
    pantalla.textContent = "";
  });
}

resta();

//read screen operation
//calculate operation on click
function equal() {
  equals.addEventListener("click", function() {
    if ((operator = true)) {
      const val = localStorage.getItem("value");
      const sumand = localStorage.getItem("sumando");
      let result = Number(val) + Number(sumand);
      pantalla.textContent = result;
    }
    if ((operator = false)) {
      const val = localStorage.getItem("value");
      const restand = localStorage.getItem("restando");
      let resultRest = Number(restand) - Number(val);
      pantalla.textContent = resultRest;
      return;
    }
  });
}
equal();

//update text on input with the result
//Save in local storage
//get from local storage
//load from local storage

//clear button

function clearScreen() {
  eraser.addEventListener("click", function() {
    pantalla.textContent = "";
    localStorage.clear();
  });
}
clearScreen();
