import Turf from "./turf.js";
import { buildLevel, level1, level2 } from "./levels.js"
import Player1 from "./player1.js";
import Player2 from "./player2.js";
import Spitwad from "./spitwad.js";
import InputHandler from "./input.js";

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
        this.gamestate = GAMESTATE.MENU;
        this.terrain = buildLevel(this, level1, level2)
        this.player1 = new Player1(this);
        this.player2 = new Player2(this);
        this.spitwad = new Spitwad(this);
        new InputHandler(this.spitwad, this)
    }


    start() {
        if(
            this.gamestate !== GAMESTATE.MENU &&
            this.gamestate !== GAMESTATE.NEWLEVEL
        )
        return;

    }

    update(deltaTime) {
        return;
    }
    
    draw(ctx) {
        
        this.terrain.forEach((object) => object.draw(ctx));
        this.player1.draw(ctx);
        this.player2.draw(ctx);
        this.spitwad.draw(ctx);
        
        if(this.gamestate === GAMESTATE.PAUSED) {
            ctx.rect(0,0,this.gameWidth, this.gameHeight);
            ctx.fillStyle = "rgba(0,0,0,0.5)";
            ctx.fill();

            ctx.font = "30px Arial";
            ctx.fillStyle = "white";
            ctx.textAlign = "center";
            ctx.fillText("Paused", this.gameWidth / 2, this.gameHeight / 2);
        }
    }




    togglePause() {
        if(this.gamestate === GAMESTATE.PAUSED) {
            this.gamestate = GAMESTATE.RUNNING;
        } else {
            this.gamestate = GAMESTATE.PAUSED;
        }
    }




}
