import Turf from "./turf.js"

export function buildLevel(game, level) {
    let terrain = [];

    level.forEach((row, rowIndex) => {
        row.forEach((turf, turfIndex) => {
            if (turf === 1) {
                let position = {
                    x: 1 * turfIndex,
                    y: 1 * rowIndex
                }
                terrain.push(new Turf(game, position));
            }
        });
    });
    return terrain;
}

export const level1 = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
];