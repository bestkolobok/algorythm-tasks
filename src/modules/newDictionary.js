function isMatchedArrays(arr1, arr2) {
    return arr1.some((item) => arr2.includes(item))
}

function testRow(array, index) {
    if (index >= array.length - 1) return null;

    const testedArray = array.slice(index + 1);
    testedArray.forEach((item, i) => {
        const isMatched = isMatchedArrays(array[index], item);
        if (isMatched) {
            array[index] = [...array[index], ...item];
            array.splice(index + i + 1, 1);
            testRow(array, index);
        }
    })
    return [...(new Set(array[index]))];
}

module.exports = (dic) => {
    const newDictionary = [...dic];

    newDictionary.forEach((row, index) => {
        const newRow = testRow(newDictionary, index);
        if (newRow) {
            newDictionary[index] = newRow;
        }
    })

    return newDictionary
}