console.log("Hello World.");

function generateRandomNumber () {
    //return random number 0-10;
    let randomNum = Math.floor(Math.random() * 15) + 1; 

// if ... else if ... else statement
// if (condition) {block og code to execute}
// ==, !, =, >, <, >=, <=< &&, ||

if(randomNum >= 5){
    console.log(`Randon Number is > = to 5`);
} else {
    console.log(`Random Number is < = to 5`);
}

    return console.log(randomNum);
}
