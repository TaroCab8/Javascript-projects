// get all elementos cliqueables
const categories = document.querySelector(".cat-menu");
const udeBus = document.querySelector(".udemy-bus");
const teachOnUdemy = document.getElementById("link-flex-end");
const cart = document.querySelector(".cart");




//get divs a aparecer
const catSubOne = document.querySelector("#categories-submenu");
const catSubTwo = document.querySelector(".cat-sub2");
const catSubTree = document.querySelector(".cat-sub3");
const busSubMenu = document.querySelector(".business-submenu");
const teachSubMenu = document.querySelector(".teach-submenu");
const cartSubMenu = document.querySelector(".cart-submenu");


//add eventlisteners 
    //categories
categories.addEventListener("mousemove", myFunction);
categories.addEventListener("mouseout", myFunctionDos);

function myFunctionDos () {
    catSubOne.style.opacity ="0";
}
function myFunction () {
    catSubOne.style.opacity ="1";
}

    // Udemy business

udeBus.addEventListener("mousemove", suFunction);
udeBus.addEventListener("mouseout", suFunctionDos);

function suFunctionDos () {
    busSubMenu.style.opacity ="0";
}
function suFunction () {
    busSubMenu.style.opacity ="1";
}

    //Teach On Udemy

teachOnUdemy.addEventListener("mousemove", laFunction);
teachOnUdemy.addEventListener("mouseout", laFunctionDos);

function laFunctionDos () {
    teachSubMenu.style.opacity ="0";
}
function laFunction () {
    teachSubMenu.style.opacity ="1";
}

    //cart  

    cart.addEventListener("mousemove", esaFunction);
    cart.addEventListener("mouseout", esaFunctionDos);
    
    function esaFunctionDos () {
        cartSubMenu.style.opacity ="0";
    }
    function esaFunction () {
        cartSubMenu.style.opacity ="1";
    }    