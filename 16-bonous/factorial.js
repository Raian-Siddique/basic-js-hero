// 5!=1*2*3*4*5
function factorial(num) {
    var fact = 1;
    for (var i; i <= num; i++) {
        fact = fact * i;
        // console.log(i, fact);
    }
    return fact;
}
var result = factorial(5);
console.log('result', result);