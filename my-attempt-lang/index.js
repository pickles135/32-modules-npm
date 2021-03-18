const franc = require('franc'); //requires language package
const args = process.argv.slice(2); //grabs all args places into argv array
const string = args.join(' ') //joins them

console.log('The language written is: ' + franc(string));
