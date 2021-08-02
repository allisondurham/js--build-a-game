
export default class Block {

    constructor(xCoord, yCoord) {

        //
    }



}



const gravity = { x: 0, y: 0.1 }
const ground = GAME_HEIGHT; // define ground at bottom of canvas
const bounce = 0.1;
let blocksPerColumn = 0;
const object = {

    pos: { x: ctx.canvas.width / 2, y:-100 }, //position in middle top of canvas
    vel: { x: 0, y: 0 },
    size: { w: 100, h: 100 },
    update() {
        this.vel.x += gravity.x;
        this.vel.y += gravity.y;
        this.pos.x += this.vel.x;
        this.pos.y += this.vel.y;
        const g = ground - this.size.h - 40; //adjust for size
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
requestAnimationFrame(mainLoop); //run on index.js
// export class block 