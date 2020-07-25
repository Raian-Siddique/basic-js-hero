// feetToMile conversion.
function feetToMile(feet) {
    if (feet < (0)) {
        return 'Come on man ! Input cannot be less than zero';
    } else {
        return (feet * 0.000189394);
    }
}


// var inputFeet = "50";
// var mile = feetToMile(inputFeet);
// console.log(mile);