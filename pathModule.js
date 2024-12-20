//The path module in Node.js is a built-in module that provides methods for working with file and directory paths;
//1. Constructing: Create file and directory paths
//2. Manipulating: Work with file and directory paths
//3. Platform independence: Handle and transform paths accross different operatind systems


const path = require('path')

console.log(path.sep)

const filePath = path.join('/content', 'subfolder', 'test.txt')

console.log(filePath)

const base = path.basename(filePath);
console.log(base)

const absolute = path.resolve(__dirname,'content','subfolder','test.txt');
console.log(absolute)