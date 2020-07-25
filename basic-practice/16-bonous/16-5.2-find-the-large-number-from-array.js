//********** */ HOW TO FIND A LATGEST NUMBER*******/////
function largestNumber(numbers) {
    var larger = numbers[0];
    for (var i = 0; i < numbers.length; i++) {
        var element = numbers[i];
        if (element > larger) {
            larger = element;
        }
    }
    return larger;
}
//we can call array from a var as well
var numbers = [54, 65, 45, 47, 54, 97, 24, 98, 32];
var output = largestNumber(numbers);
console.log(output);


//we can put array dirrectly in the function.


// var output = largestNumber([45, 78, 89]);
// console.log(output);