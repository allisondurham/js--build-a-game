import Game from "./game.js"


let canvas = document.getElementById("gameScreen");
let ctx = canvas.getContext("2d");

// ctx.fillStyle = "#2B5633"

// ctx.fillRect(350, 550, 150, 50);
// ctx.fillRect(540, 420, 60, 180);
// ctx.fillRect(500, 500, 40, 100);
// ctx.fillRect(750, 350, 50, 250);
// ctx.fillRect(600, 300, 150, 300);
// ctx.fillRect(200, 420, 150, 180);
// ctx.fillRect( 100, 500, 100, 100);
// ctx.fillRect( 0, 400, 100, 200);



const GAME_WIDTH = 800;
const GAME_HEIGHT = 600;

let game = new Game(GAME_WIDTH, GAME_HEIGHT);

game.draw(ctx)
