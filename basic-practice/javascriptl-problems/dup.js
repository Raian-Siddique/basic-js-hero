var name = [3, 5, 4, 4, 9, 9, 5, 4, 45, 65, 78];
var uniqueName = [];
for (var i = 0; i < name.length; i++) {
    var element = name[i];
    var index = uniqueName.indexOf(element);
    if (index == -1) {
        uniqueName.push(element);
    }
}
console.log(uniqueName);