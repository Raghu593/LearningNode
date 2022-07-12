const path = require('path');

console.log(path.sep);

const filePath=path.join('content','text','text.txt');

console.log(filePath);

console.log(path.basename(filePath));

const absolute = path.resolve(__dirname,'content','text','text.txt');

console.log(absolute)