// var marks = [5, 10, 15, 17, 25];
// for (var i = 0; i < marks.length; i++) {
//     var element = marks[i];
//     console.log(element);

// }
// var roll = [21, 25, 56, 75, 55, 51];
// for (var i = 0; i < roll.length; i++) {
//   var element = roll[i];
//   console.log("element");
// }
// console.log("outside");
// console.log("gulustan");
// function add(number1, number2) {
//   var total = number1 + number2;
//   return total;
// }
// var result1 = add(65, 89);
// console.log(result1);
// console.log("not adding this time");
// console.log("not eating right now");

// var result2 = add(144, 568);
// console.log(result2);


function factorial(num) {
    var fact = 1;
    for (var i = 1; i <= num; i++) {
        fact = fact * i;
        console.log(i, fact);
    }
    return fact;
}
var result = factorial(5);
console.log('result', result);
cha