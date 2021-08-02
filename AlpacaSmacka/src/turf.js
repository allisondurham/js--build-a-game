export default class Turf {
    constructor(game, position) {
        this.image = document.getElementById("img_turf");
        this.position = position;
        this.height = 20;
        this.width = 20;
    }

    draw(ctx) {
        // debugger;
        // this.position.y ++
        ctx.drawImage(
            this.image,
            this.position.x,
            this.position.y,
            this.width,
            this.height
        );
    }
}