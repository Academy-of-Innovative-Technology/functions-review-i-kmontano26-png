// ===== FUNCTIONS WITH NO PARAMETERS ===== //

function sayHello(){
    let output1 = document.querySelector("#output1");
    output1.innerHTML = "Hello Jeison! Welcome to Javascript functions review!"
}

function showDate(){
    let output1 = document.querySelector("#output1");
    output1.innerHTML = "10/30/2025"
}

function motivate(){
    let output1 = document.querySelector("#output1");
    output1.innerHTML = "The future belongs to those who believe in the beauty of their dreams"
}

function showRep(){
    let output1 = document.querySelector("#output1");
    output1.innerHTML = "Show who you Rep!"
}




// ===== FUNCTIONS WITH PARAMETERS ===== //

function add(val1 , val2){
    let output2 = document.querySelector("#output2");
    output2.innerHTML = `The sum of ${val1} + ${ val1 + val2 }`; 
}

function greetUser(name) {
    let output2 = document.querySelector("#output2");
    output2.innerHTML = `Hello, ${name}!  👋 Welcome to the world of JavaScript.`;
}

function calculateBtn(width, height) {
    let output2 = document.querySelector("#output2");
    let area = width * height;
    output2.innerHTML = `The area of a ${width}x${height} rectangle is ${area} square units.`;
} 

function favoriteColor(color) {
    let output2 = document.querySelector("#output2");
    output2.innerHTML = `Your favorite color is ${color}! 🎨`;
}

function temp(celcius, mul, sum) {
    let output2 = document.querySelector("#output2");
    output2.innerHTML = `In fahrenheit is  ${celcius} * ${mul } + ${sum} = ${ celcius * mul + sum}`;
}




// ===== EVENT LISTENERS THAT CALLS FUNCTIONS ===== //

document.querySelector(".sayHelloBtn").addEventListener("click", function() {
    sayHello();
});

document.querySelector(".showDate").addEventListener("click", function() {
    showDate();
});


//pt2
document.querySelector(".showSum").addEventListener("click", function() {
    add(5 , 7);
});


document.querySelector(".motivate").addEventListener("click", function() {
    motivate();
});

document.querySelector(".showRep").addEventListener("click", function() {
    showRep();
});

document.querySelector(".greetUser").addEventListener("click", function() {
    greetUser("Alex");
});

 document.querySelector(".calculateBtn").addEventListener("click", function() {
 calculateBtn(10, 8);

});


 document.querySelector(".favoriteColor").addEventListener("click", function() {
 favoriteColor("Black");

});



 document.querySelector(".temp").addEventListener("click", function() {
 temp(25, 1.8, 32);

});

