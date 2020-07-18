function brickCalculator(floor) {
    var totalFloor;
    if (floor >= 0 && floor <= 10) {
        totalFloor = floor * 15 * 1000;
    } else if (floor > 10 && floor <= 20) {
        totalFloor = (floor * 12 * 1000) + 30000;
    } else if (floor > 20) {
        totalFloor = (floor * 10 * 1000) + 70000;
    } else {
        return ('Come on Man ! Building height cannot be negative...')
    }
    return totalFloor;

}
// var floor = 15;
// var result = brickCalculator(floor);
// console.log(result);
var floor = 10;
var result = brickCalculator(floor);
console.log(result);












// function brickCalculator(floor) {
//     if (floor <= 10) {
//         for (
//             floor = 0; floor <= 10; floor++) {
//             var ten = floor * 15 * 1000;
//         }
//     }
//     return floor;
//     // ifelse(floor){

//     // }
// }
// var floor = 5;
// var result = brickCalculator(floor);
// console.log(result);

// 44444444444444444444444444444444444444
function brickCalculator(floor) {

    var bricksForEachFloor = floor * 1000;
    var totalFloor;

    if (floor >= 0 && floor <= 10) {
        totalFloor = bricksForEachFloor * 15;
    } else if (floor > 10 && floor <= 20) {
        totalFloor = (bricksForEachFloor * 12) + 30000;
    } else if (floor > 20) {
        totalFloor = (bricksForEachFloor * 10) + 70000;
    } else {
        console.log('Come on Man ! Building height cannot be negative...')
    }
    return totalFloor;

}
var floor = 25;
var result = brickCalculator(floor);
console.log(result);