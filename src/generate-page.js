// const originalPage = require('./original-page');
const fs = require('fs');
// const { resolve } = require('path');


const writeFile = (data) => {
    console.log(data)
    return new Promise((resolve, reject) => {

    
    fs.writeFile('./dist/index.html', data, err => {
        if (err) {
            reject(err);
            return;
        }
        else {
            console.log('Success, site has been created')
            resolve({
                ok: true,
                message: "file created"
            });
        };
    });
});
}
module.exports = { writeFile };