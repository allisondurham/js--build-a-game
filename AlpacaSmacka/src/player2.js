export default class Player2 {
    constructor() {
        this.image = document.getElementById("img_p2");
        this.position = { x: 660, y: 150 }
        // this.width = 34;
        // this.height = 40;
        // this.size = 30
    }

    draw(ctx) {
        ctx.drawImage(
            this.image,
            this.position.x,
            this.position.y,
            // this.width,
            // this.height
            // this.size
        );
        // console.log(this.position);
    }
}