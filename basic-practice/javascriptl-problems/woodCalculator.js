function woodCalculator(chair, table, bed) {
    if (chair < 0 || table < 0 || bed < 0) {
        return 'Come on Man!!! Vaue of table chair cannot be negative.'
    } else {
        var woodForChair = chair * 1;
        var woodForTable = table * 3;
        var woodForBed = bed * 5;

        var total = woodForChair + woodForTable + woodForBed;
        return total;
    }
}


// var chair = -1;
// var table = -3;
// var bed = -4;
// console.log(woodCalculator(chair, table, bed));