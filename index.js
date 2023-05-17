function filterBands(arr, genre) {
    // Write your code here
    return arr
        .filter((band) => band.genre === genre)
        .map((band) => band.name);
}

//Dont change the code below
var readline = require("readline").createInterface(process.stdin);
let inputArr = [];
var lineNumber = -1;

readline.on("line", readInputs);

function readInputs(line) {
    inputArr.push(line);
    lineNumber++;

    if (lineNumber == 1) {
        logic("s");
        readline.close();
    }
}



function logic(input) {
    let arr = JSON.parse(inputArr[0]);
    let genre = inputArr[1];
    console.log(filterBands(arr, genre).join('\n'));
}