import Turf from "./turf.js";
import { buildLevel, level1 } from "./levels.js"

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
    }



    draw(ctx) {
        this.terrain.forEach((object) => object.draw(ctx))
        console.log(this.terrain)
    }
}
