var prompt = require('prompt-sync')();
function greet(name)
    {
        for(let i=1;i<=5;i++)
{
    
    console.log(name);
}

        console.log("Hello " + name + ", welcome!");
    }

greet(prompt("Enter your name: "));