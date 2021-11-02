import fs from 'fs';

export const readFile = (callback, path) => {
    fs.readFile(`${path}.in`, (err, data) => {
        callback(data.toString());
    })
}

export const writeToFile = (data, path) => {
    fs.writeFile(`${path}.out`, data, () => {
        console.log("Successfully Written to File.");
    });
}