// Printing numbers from 1-5 with a while loop 
// var count = 1;
// while (count < 6) {
//     console.log("count is : " + count);
//     count++;
// }

for (var i = -5; i <= 7; i++) {
    console.log(i)
}
console.log("Printing all even number between 10 to 40")

for (var i = 10; i <= 40; i++) {
    if (i % 2 == 0) {
        console.log(i);
    }
}
console.log("Printing all odd number between 300 to 333")
for (var i = 300; i < 333; i++) {
    if (i % 2 !== 0) {
        console.log(i);
    }
}

console.log("Printing all the number divisible by 3 and 5 between 5 to 50")
for (var i = 5; i <= 50; i++) {
    if (i % 3 == 0 || i % 5 == 0) {
        console.log(i);
    }
}