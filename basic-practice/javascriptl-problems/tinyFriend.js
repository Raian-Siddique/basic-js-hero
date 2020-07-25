function tinyFriend(array) {
    var shortLength = Infinity;
    var shortest;

    if (array.length > 0) {
        for (var i = 0; i < array.length; i++) {
            if (array[i].length < shortLength) {
                shortest = array[i];
                shortLength = array[i].length;
            }
        }
    }
    return shortest;
}

var output = tinyFriend(['Hati', 'dim', 'Ptoll', 'Ziraff']);
console.log(output);


// 888888888888888888888888

function tinyFriend(array) {
    var shortLength = Infinity;
    var shortest = "";

    if (array.length > 0) {
        for (var i = 0; i < array.length; i++) {
            if (typeof array[i] === 'string' && array[i].length < shortLength) {
                shortest = array[i];
                shortLength = array[i].length;
            }
        }
    }
    return shortest;
}

var output = tinyFriend(['Hati', 'Alu', 'pip', 'Ptoll', 'Ziraff']);
console.log(output);