const fs = require('fs');

// Read
/*
fs.readFile('./hello.txt', (err, data) => {
    if(err) {
        console.log(errrorrr);
    }
    console.log('1', data.toString());
})

const file = fs.readFileSync('./hello.txt');
console.log('2', file.toString());
*/


// Append - mag dadagdag sa existing file.
/*
const salita = " ayun oh! nakapag dagdag ng txt gamit node.js hahahaha"
fs.appendFile('./hello.txt', `${salita}`, err => {
    if(err) {
        console.log(err);
    }
});
*/

// Write - adding a file 
/*
fs.writeFile('bye.txt', 'how sad. huhuhu', err => {
    if(err) {
        console.log(err);
    }
})
*/

//Delete
fs.unlink('./bye.txt', err => {
    if(err) {
        console.log(err);
    }
    console.log('Wala na! deleted na ni node.js');
})