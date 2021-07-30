
export default class Block {
    constructor() {

        this.gravity = {x: 0, y: 0.1};
        this.ground = ctx.canvas.height;  // ground at bottom of canvas.
        this.bounce = 0.9; // very bouncy

        this.object = {
            pos: {x: ctx.canvas.width / 2, y: 0}, // position halfway on canvas
            vel: {x: 0, y: 0}, // velocity
            size: {w: 10, h: 10},
            update() {
                this.vel.x += gravity.x;
                this.vel.y += gravity.y;
                this.pos.x += this.vel.x;
                this.pos.y += this.vel.y;
                const g = ground - this.size.h; // adjust for size
                if(this.pos.y >= g) {
                    this.pos.y = g - (this.pos.y - g); // 
                    this.vel.y = -Math.abs(this.vel.y) * bounce;  
                    if (this.vel.y >= -gravity.y) {  // check for rest.
                        this.vel.y = 0;
                        this.pos.y = g - gravity.y;
                    }
                }
            },
            draw() { ctx.fillRect(this.pos.x, this.pos.y, this.size.w, this.size.h) },
            reset() { this.pos.y = this.vel.y = this.vel.x = 0 },
        }
    }
    mainLoop() {
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        this.object.update(); // move object
        this.object.draw();
        requestAnimationFrame(mainLoop);
}
}
