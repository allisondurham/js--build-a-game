import Turf from "./turf.js";
import { buildLevel, level1 } from "./levels.js"
import Player1 from "./player1.js";
import Player2 from "./player2.js"

const GAMESTATE = {
    PAUSED: 0,
    RUNNING: 1,
    MENU: 2,
    GAMEOVER: 3,
    NEWLEVEL: 4
}

export default class Game {
    constructor(gameWidth, gameHeight) {
        this.gameWidth = gameWidth;
        this.gameHeight = gameHeight;
        this.terrain = buildLevel(this, level1)
        this.player1 = new Player1(this);
        this.player2 = new Player2(this);
    }



    draw(ctx) {
        this.terrain.forEach((object) => object.draw(ctx));
        this.player1.draw(ctx);
        this.player2.draw(ctx);
    }
}
