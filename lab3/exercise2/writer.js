// require file system module

const fs = require('fs');


// create writable stream to create a file

const file = fs.createWriteStream('./writer.txt');



// function a named function expression to write data

var writeData = function() {

    for(let i=0; i<=10; i++){

        file.write('this is some write line text\n')

    }

    file.end();

}

// export the writedata function to be used elsewhere

module.exports = {

    writeData: writeData

}