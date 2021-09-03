import Turf from "./turf.js"


export function buildLevel(game){
    let terrain = [];
    terrain.push(new Turf(game, {x: 20, y: -20}))
    terrain.push(new Turf(game, {x: 20, y: 0}))
    return terrain;
}







// column{
//     stack = []
//     for i >= 12
//     stack.push(new Turf)
//     ground = ground - 20
// }