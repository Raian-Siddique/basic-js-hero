// creating factorial using for loop
function factorial(n) {
    var factorial = 1;
    for (var i = 1; i <= n; i++) {
        factorial = factorial * i;

    }
    return factorial;
}
var result = factorial(6);
console.log(result);
// creating factorial using while loop