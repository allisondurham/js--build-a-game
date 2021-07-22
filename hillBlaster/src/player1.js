export default class Player1 {
    constructor() {
        this.image = document.getElementById("img_p1");
        this.position = { x: 80, y: 220 }
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