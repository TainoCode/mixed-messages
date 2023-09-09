/* This generator script will generate a random title per execution.*/

//Import fs
let fs = require('fs');

//Function that generates an array from a text file
const genArrFromFile = filename => {
    const arr = fs.readFileSync(filename).toString('utf-8').split('\n');
    return arr;
}

//Function that grabs a random word from an array
const selectRandWord = arr => {
    let randWord = arr[Math.floor(Math.random() * 100)];
    return randWord;
}

//Build all arrays
const verbArr = genArrFromFile('./verb_list.txt');
const adjectiveArr = genArrFromFile('./adjective_list.txt');
const nounArr = genArrFromFile('./noun_list.txt');

//Grab random word from each array
const randVerb = selectRandWord(verbArr);
const randAdj = selectRandWord(adjectiveArr);
const randNoun = selectRandWord(nounArr);

//Output the random title for the user
console.log('\n*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*')
console.log(' Welcome to the Random Title Generator!')
console.log('*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*\n')
console.log(`Your random title is: ${randVerb} ${randAdj} ${randNoun} \n`);
