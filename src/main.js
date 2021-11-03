console.log('\n\n\n\n+++++++++++++ START ++++++++++++++')
const {readFile, writeToFile} = require('./helpers.js');


const inputFile = 'text_files/test';
const outputFile = 'text_files/test';

readFile(main, inputFile);

function main(text) {
    const stringsArr = text.split('\n');

    const output = stringsArr

    writeToFile(output, outputFile)
}