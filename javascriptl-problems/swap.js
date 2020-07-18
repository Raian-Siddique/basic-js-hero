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
var floor = 15;
var result = brickCalculator(floor);
console.log(result);