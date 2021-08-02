

export default class Spitwad {
    constructor() {
        this.image = document.getElementById("img_spit");

        // this.gameWidth = this.game.gameWidth;
        // this.gameHeight = this.game.gameHeight;
        // this.game = game
        this.size = 20;
        this.reset();

    }

    reset() {
        this.position = { x: 110, y: 230}
        this.speed = { x: 1.5, y: -0.16 }
    }


    draw(ctx) {
        ctx.drawImage(
            this.image,
            this.position.x,
            this.position.y,
            this.size,
            this.size,
            // this.speed
        );
    }

    update(deltaTime) {
        this.position.x += this.speed.x;
        this.position.y += this.speed.y;
        if (this.position.x >= 800 - this.size) {
            this.reset();
        }
    }




    
}

