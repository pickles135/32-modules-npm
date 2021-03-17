const jokes = require('give-me-a-joke');
const colors = require('colors');
// console.dir(jokes); // list out the methods inside of this package. 

jokes.getRandomDadJoke(function(joke) {
    console.log(joke.rainbow) //print jokes in raindobw colors
})
