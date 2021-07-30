import Block from "/block.js"

let block = new Block()
const canvas = document.getElementById("gameScreen");
const ctx = canvas.getContext("2d");
canvas.width = innerWidth-4;
canvas.height = innerHeight-4;
requestAnimationFrame(block.mainLoop); // starts the animation


canvas.addEventListener("click", object.reset.bind(object));