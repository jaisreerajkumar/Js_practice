var prompt=require("prompt-sync")()

function guess(guessRandom)
{
var randomNumber=(Math.floor(Math.random()*5)+1)
console.log("The random number is "+randomNumber)
if(guessRandom==randomNumber)
{
    console.log("You guessed correctly!");
}else{
    console.log("You guessed incorrectly!");
}   
}

var guessRandom=prompt()
guess(guessRandom)