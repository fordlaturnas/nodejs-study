const fs = require('fs');

// ( --> should go UP 1 floor.
// ) --> should go DOWN 1 floor.

// 1. What floor does Santa end up?

function question1() {
    fs.readFile('./santa.txt', (err, data) => {
        console.time('Question 1: Santa-time')
        const directions = data.toString(); // yung data galing yan kay santa.txt tas kinovert into string using .toString()
        const directionsArray = directions.split(''); // gagawing array at pag hihiwalayin nya ang mga item.
        // .reduce() --> map over each item. (babasahin nya lahat ng nasa item)
        // at kapag nakita nya na ang hinahanap nya (base sa conditional na binigay mo),
        // tuloy pa din ang map nya (pag basa nya) sa lahat ng item hanggang sa kahuli-hulihan.
        const answer = directionsArray.reduce((accumulator, currentValue) => { 
            if (currentValue === '(') {
                return accumulator += 1;
            } else if (currentValue === ')') {
                return accumulator -= 1;
            }
        }, 0)
        console.timeEnd('Question 1: Santa-time')
        console.log('Question 1: Floor:', answer);
    })
}



// 2. When did Santa first enter the basement?
function question2() {
    fs.readFile('./santa.txt', (err, data) => {
        console.time('Question 2: Santa-time')
        const directions = data.toString();
        const directionsArray = directions.split('');
        let accumulator = 0;
        let counter = 0;

        // .some() --> what it does is going to look through the array, 
        // go step by step and if it finds something that matches (based on the condition), 
        // it is going to stop looping.

        // in terms of performace, may efficient si .some() kesa kay .reduce(), pero it depends pa rin sa situation.
        // both have different purpose.
        const answer = directionsArray.some((currentItem) => {
            if (currentItem === '(') {
                accumulator += 1;
            } else if (currentItem === ')') {
                accumulator -= 1;
            }
            counter ++;
            return accumulator < 0;
        })
        console.timeEnd('Question 2: Santa-time');
        console.log('Question 2: Basement entered at: ', counter);
    })
}

question1();
question2();