// GLOBALS 
// --dirname = path to current directory
// --filename = file name
// require = function to use modules
// module = info about current module (file)
// process = info about environment where the program is executed

// CommonJS, every file is a module by default
// Modules are Encapsulated Code (Only sharing mininum)

const names = require('./mod1')
const sayHi = require('./mod2')
const data = require('./objmod')
console.log(data)

sayHi('World')
sayHi(names.firstName)
sayHi(names.lastName)