function reverseString(str) {
    var reverse = "";
    for (var i = 0; i < str.length; i++) {
        var char = str[i];
        reverse = char + reverse;
    }
    return reverse;
}
var statement = "Hello alien bhai brother.";
var forAlian = reverseString(statement);
console.log(forAlian);
var foodVlog = reverseString("Ki khawa jay vai onek khuda lagse.");
console.log(foodVlog);


// Meeter to foot conversion
function convertMetersToFeet(meters) {
    if (meters < (0)) {
        return 'input cannot be less than zero';
    } else {
        return (meters / 0.3048);
    }
}
var inputFeet = "20";
var intoMeter = convertMetersToFeet(inputFeet);
console.log("so total mile is: ", intoMeter);