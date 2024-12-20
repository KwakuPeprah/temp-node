// The fs Module is a built in module that helps us to store,access and manage data on our operating system.

//THE SYNCHRONUS APPROACH

//Destructuring the methods we want to use
const {readFileSync, writeFileSync, read} = require('fs')

// reading my already existing txt file.
const first = readFileSync('./content/first.txt', 'utf8')
const second = readFileSync('./content/second.txt', 'utf8')

console.log(first, second)

//Creating or writing a file

writeFileSync('./content/result.txt', `Here is the result`)



//THE ASYNCHRONOUS APPROACH
const {readFile, writeFile} = require('fs')

//Reading the file with the CALL-BACK function
readFile('./content/first.txt','utf8',(err,result)=>{
    if(err){
        console.log(error)
        return;
    }
    console.log(result)
})