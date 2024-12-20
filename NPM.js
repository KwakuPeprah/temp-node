// NPM enables us to
//1. Resuse our own code in other projects
//2. Use code written by other developers
//

//npm - global command, comes with node
//npm --version

//local dependency = use it only in this particular project
//npm i <packageName>

//global dependency - use it in any project
//npm install -g <packageName>

//package.json is a manifest file that stores important info about project/package
//npm init
//nom init -y

const _ = require('lodash');

const items = [1, [2, [3, [4]]]]
const newItems = _.flattenDeep(items)

console.log(newItems)