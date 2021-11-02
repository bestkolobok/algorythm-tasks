console.log('///////// MAIN ///////')
import {readFile, writeToFile} from './helpers.js';

const inputFile = 'text_files/text';
const outputFile = 'text_files/text';

readFile(main, inputFile);

function main(text) {
    console.log(text);


    writeToFile('some text \n loriem ipsum', outputFile)
}