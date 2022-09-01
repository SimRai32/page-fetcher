// const readline = require('readline');
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });
const args = process.argv.slice(2);
const request = require('request');
const fs = require('fs');

const fetcher = (url, path) => {
  request(url, (error, response, body) => {
    if (error) {
      console.log("Error", error);
    }
    if (body) {
      write(body, path);
    }
  });
};


const write = (text, path) => {
  fs.writeFile(path, text, err => {
    if(err) {
      console.log(err);
    }
    if(!err) {
      console.log(`Download and saved ${text.length} bytes to ${path}`);
    }
  });
};


const execute = fetcher(args[0], args[1]);
execute;
// fs.access(args[1], fs.constants.R_OK, (err) => {
//   if (!err) {
//     rl.question('Do you want to overwrite this file? y/n \n', (answer) => {
//       if (answer === "y") {
//         execute;
//       }
//       rl.close();
//     });
//   }
//    else {
//      execute;
//    }
// });

