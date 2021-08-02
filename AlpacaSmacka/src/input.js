import Game from "./game.js";
import Spitwad from "./spitwad.js";

export default class InputHandler {

    constructor(spitwad, game) {
        document.addEventListener("keydown", event => {


            switch(event.keyCode) {
                case 27:
                    game.togglePause();
                    break;

                case 32: 
                    game.start();
                    break;
        
            }
        })
    }

}