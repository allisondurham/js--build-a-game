export default class Player2 {
    constructor() {
        this.image = document.getElementById("img_p2");
        this.position = { x: 640, y: 140 }
        this.height = 60;
        this.width = 60;
    }

    draw(ctx) {
        ctx.drawImage(
            this.image,
            // this.position,
            this.position.x,
            this.position.y,
            this.width,
            this.height
        );
        console.log(this.position);
    }
}