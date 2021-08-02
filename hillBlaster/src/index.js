import Game from "./game.js"
import Spitwad from "./spitwad.js"


let canvas = document.getElementById("gameScreen");

let ctx = canvas.getContext("2d");
export default ctx 

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


let lastTime = 0;
function gameLoop(timestamp) {
    let deltaTime = timestamp - lastTime;
    lastTime = timestamp;

    ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);

    game.spitwad.update(deltaTime);
    game.draw(ctx);

    requestAnimationFrame(gameLoop);
}

requestAnimationFrame(gameLoop);


requestAnimationFrame(mainLoop);

const gravity = { x: 0, y: 0.1 }
const ground = GAME_HEIGHT; // define ground at bottom of canvas
const bounce = 0.1;
let blocksPerColumn = 0;
const object = {

    pos: { x: ctx.canvas.width / 2, y: ctx.canvas.height -100 }, //position in middle top of canvas
    vel: { x: 0, y: 0 },
    size: { w: 100, h: 100 },
    update() {
        this.vel.x += gravity.x;
        this.vel.y += gravity.y;
        this.pos.x += this.vel.x;
        this.pos.y += this.vel.y;
        const g = ground - this.size.h - 100; //adjust for size
        if(this.pos.y >= g) {
            this.pos.y = g - (this.pos.y - g);
            this.vel.y = -Math.abs(this.vel.y) * bounce;
            // blocksPerColumn ++;
            if(this.vel.y >= -gravity.y) {
                this.vel.y = 0;
                this.pos.y = g - gravity.y;
            }
        }
    },
    draw() { ctx.fillRect(this.pos.x, this.pos.y, this.size.w, this.size.h)},
    reset() { this.pos.y = this.vel.y = this.vel.x = 0 },
}

function mainLoop() {
    ctx.clearRect(0, 0, ctx.GAME_WIDTH, ctx.GAME_HEIGHT);
    object.update(); //move object
    object.draw();
    requestAnimationFrame(mainLoop);
}
canvas.addEventListener("click", object.reset.bind(object));


const object2 = {
    pos: { x: ctx.canvas.width / 2 + 30, y: 0 }, //position in middle top of canvas
    vel: { x: 0, y: 0 },
    size: { w: 100, h: 100 },
    update() {
        this.vel.x += gravity.x;
        this.vel.y += gravity.y;
        this.pos.x += this.vel.x;
        this.pos.y += this.vel.y;
        const g = ground - this.size.h; //adjust for size
        if(this.pos.y >= g) {
            this.pos.y = g - (this.pos.y - g);
            this.vel.y = -Math.abs(this.vel.y) * bounce;
            if(this.vel.y >= -gravity.y) {
                this.vel.y = 0;
                this.pos.y = g - gravity.y;
            }
        }
    },
    draw() { ctx.fillRect(this.pos.x, this.pos.y, this.size.w, this.size.h)},
    reset() { this.pos.y = -100, this.vel.y = this.vel.x = 0 },
}
function mainLoop2() {
    ctx.clearRect(0, 0, ctx.GAME_WIDTH, ctx.GAME_HEIGHT);
    object2.update(); //move object
    object2.draw();
    requestAnimationFrame(mainLoop2);
}
requestAnimationFrame(mainLoop2)

canvas.addEventListener("click", object2.reset.bind(object2));