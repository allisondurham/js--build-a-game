export default class Player1 {
    constructor() {
        this.image = document.getElementById("img_p1");
        this.position = { x: 80, y: 230 }
        // this.size = 40
        // this.width = 34;
        // this.height = 40;
    }

    draw(ctx) {
        ctx.drawImage(
            this.image,
            // this.position,
            this.position.x,
            this.position.y,
            // this.width,
            // this.height
        );
        // console.log(this.position);
    }
}