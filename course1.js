var fs = require('fs');
const text = fs.readFileSync("./data.txt").toString();
 const stringArray = text.split('\.');
 var sayac = 1;
stringArray.forEach((element) => {
    console.log(sayac +'-'+element)
    sayac++;
});
