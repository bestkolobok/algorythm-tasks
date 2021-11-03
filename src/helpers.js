// import fs from 'fs';
const fs = require('fs');

const readFile = (callback, path) => {
    fs.readFile(`${path}.in`, (err, data) => {
        callback(data.toString());
    })
}

const writeToFile = (data, path) => {
    fs.writeFile(`${path}.out`, data, () => {
        console.log("Successfully Written to Filedfdf.");
    });
}

module.exports = {
    readFile,
    writeToFile
}