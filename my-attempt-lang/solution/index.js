const franc = require('franc');
const langs = require('langs');
const colors = require('colors');

const input = process.argv.slice(2);
const string = input.join(' ') 
const langCode = franc(string);

if(langCode === 'und') {
    console.log('Cannot find language, please enter more sample text'.red)
}  else {
    const language = langs.where('3', langCode);
    console.log(`Our best guess is: ${language.name}`.green);
}
