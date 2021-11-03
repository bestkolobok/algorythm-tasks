console.log('\n\n\n\n+++++++++++++ START ++++++++++++++++')
const {readFile, writeToFile} = require('./helpers.js');
const {getVariants, maxNumber, getPlayer} = require('./modules/calculations.js');


const inputFile = 'text_files/test';
const outputFile = 'text_files/test';

readFile(main, inputFile);

function findGoodVariant(pile) {
    const variants = getVariants(pile);
    if (variants.includes(pile)) return pile;
    const goodVariants = variants.filter((item) => {
        const oppositeVariants = getVariants(pile - item);
        return oppositeVariants.length === 0;
    })

    if (goodVariants.length > 0) {
        return maxNumber(goodVariants);
    }
    return maxNumber(variants);
}

function testGame(amount) {
    let pile = amount;

    let winner = getPlayer(1);

    for(let i = 1; pile > 0; i++) {
        const goodVariant = findGoodVariant(pile);
        if (goodVariant > 0) {
            pile = pile - goodVariant;
            winner = getPlayer(i);
        }
    }

    return winner;
}

function main(text) {
    const inputArr = text.split('\n').map((item) => +item);

    const output = inputArr.reduce((acc, amount) => {
        return acc + testGame(amount) + '\n'
    }, '')

    writeToFile(output, outputFile)
}