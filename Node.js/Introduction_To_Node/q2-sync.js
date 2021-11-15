const { readFileSync } = require("./util/readFile");

const fileContent = readFileSync("./dummyFile.txt");
console.log(fileContent);
console.log("----Finished----");
