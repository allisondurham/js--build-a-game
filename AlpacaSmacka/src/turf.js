const GAME_HEIGHT = 600;
const GAME_WIDTH = 800;
const gravity = { y: 0.1 }
const ground = GAME_HEIGHT; // define ground at bottom of canvas
const bounce = 0.1;


export default class Turf {
    constructor(game, position) {
        this.image = document.getElementById("img_turf");
        this.vel = { x: 0, y: 0 };
        this.position = position;
        this.height = 20;
        this.width = 20;
        this.blockStop = this.position.y + 20;
    }

    reset() { this.pos.y = this.vel.y = this.vel.x = 0 }

    updatePosition(ctx){
        this.position.y ++

        this.vel.y += gravity.y;
        this.position.y += this.vel.y;
        let g = ground - this.height - this.blockStop; //adjust for size
        if(this.position.y >= g) {
            this.position.y = g - (this.position.y - g);
            this.vel.y = -Math.abs(this.vel.y) * bounce;
            if(this.vel.y >= -gravity.y) {
                this.vel.y = 0;
                this.position.y = g - gravity.y;
            }
        }
    }

    draw(ctx) {
        this.updatePosition(ctx)
        ctx.drawImage(
            this.image,
            this.position.x,
            this.position.y,
            this.width,
            this.height
        );
    }
}