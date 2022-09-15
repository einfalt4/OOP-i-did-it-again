const originalPage = require('./original-page')
const fs = require('fs');


const writeFile = (data) => {
    fs.writeFile('./dist/index.html', originalPage(data), err => {
        if (err) {
            reject(err);
            return;
        }
        else {
            console.log('Success, site has been created')
        }
    })
}

module.exports = { writeFile };