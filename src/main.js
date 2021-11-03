console.log('\n\n\n\n+++++++++++++ START ++++++++++++++')
const {readFile, writeToFile} = require('./helpers.js');
const newDictionary = require('./modules/newDictionary.js');


const inputFile = 'text_files/example/example_big';
const outputFile = 'text_files/test';

readFile(main, inputFile);

function main(text) {
    const stringsArr = text.split('\n');

    const casesCount = +stringsArr[0];
    const onlyCases = stringsArr.slice(1);

    const cases = [];

    for (let i = 0; i < casesCount; i++) {
        const numberOfDictionary = +onlyCases.splice(0, 1)[0];
        const dictionary = onlyCases.splice(0, numberOfDictionary);
        const numberOfTests = +onlyCases.splice(0, 1)[0];
        const tests = onlyCases.splice(0, numberOfTests);

        const dictionaryPairArray = dictionary.map((item) => item.toLowerCase().split(' '));
        const testsPairArray = tests.map((item) => item.toLowerCase().split(' '));

        cases.push({dictionary: newDictionary(dictionaryPairArray), tests: testsPairArray})
    }


    function testPair(testPairs, dictionary) {
        function isSynonym(first, second) {
            if (first === second) return true;
            return dictionary.reduce((acc, dictSet) => {
                if(acc || dictSet.includes(first) && dictSet.includes(second)) {
                    return true
                }
                return acc
            }, false)
        }

        return testPairs.map((pair) => {
            return isSynonym(pair[0], pair[1]) ? 'synonyms' : 'different';
        }).join('\n');
    }

    const output = cases.reduce((acc, {dictionary, tests}, i) => {
        return acc + testPair(tests, dictionary) + '\n'
    }, '')


    writeToFile(output, outputFile)
}