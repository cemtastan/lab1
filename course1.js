let fs = require('fs');
const text = fs.readFileSync("./data.txt").toString();
const stringArray = text.split('\.');

let sayac = 0;
printArray(stringArray)

const stdin = process.openStdin();
stdin.addListener("data", onInput);
console.log(`
Hello: 
Please enter following commands.
To remove any data please write:
        remove/[index]

`)
function onInput(data) {
    let input = data.toString().split('/');
    if (input[0] === "remove") {

        removeDataOnIndex(stringArray, input[1])

    } else {
        console.log('What the hell you mean !!!')
    }
}

function printArray(arrayData) {
    for (let i = 0; i < arrayData.length; i++) {
        let item = arrayData[i];
        console.log(i, item);
    }
}

function removeDataOnIndex(arrayData, index) {
    console.log('removed record ' + index);
    arrayData.splice(index, 1)
    printArray(arrayData)

}