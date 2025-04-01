console.log(Math.random());
console.log(Math.random() * 10);
console.log(Math.floor(Math.random() * 10));
console.log(Math.floor(Math.random() * 10) + 1);
console.log(Math.floor(7.8));
console.log(Math.ceil(2.1));
console.log(Math.floor(Math.random() * 6));
console.log(Math.ceil(Math.random() * 5));
let random = Math.random() * 5;
console.log(`Random:`, random);
console.log(`Floor:`, Math.floor(random));
console.log(`Ceil:`, Math.ceil(random));
console.log(Math.floor(Math.random() * 6) + 1);

function showRandom(){
    document.getElementById("output").innerText = Math.random();
}
function showFloor(){
    document.getElementById("output").innerText = Math.floor(7.9);
}
function showCeil(){
    document.getElementById("output").innerText = Math.ceil(2.2);
}
function rollDice(){
    let roll = Math.floor(Math.random() * 6) + 1;
    document.getElementById("output").innerText = "Dice Roll " + roll;
}
function pickRandom(){
    let names = ["Matthew", "Zachery", "Logan", "Kathey"];
    let index = Math.floor(Math.random()*names.length);
    document.getElementById("output").innerText = "Chosen: " + names[index];
}