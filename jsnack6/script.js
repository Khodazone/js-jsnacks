// Chiedere al computer un numero casuale compreso fra 0 e 10
let randomNumberGenerated = Math.floor(Math.random() * 9) + 1;
console.log("This is the random number generated: " + randomNumberGenerated);

// Chiedere di inserire un numero e dichiarare se il numero scelto dall'utente è uguale a quello del PC
let userNumber = prompt("Insert your number!");
console.log("This is your personal number: " + userNumber);

if(!isNaN(userNumber) && userNumber > 10){
    document.getElementById("error").innerHTML = "Enter a correct number between 0 and 10!";
}
else if(!isNaN(userNumber) && userNumber == randomNumberGenerated){
    document.getElementById("winner").innerHTML = "Congratulations, you win!";
}
else if (!isNaN(userNumber) && userNumber != randomNumberGenerated){
    document.getElementById("loser").innerHTML = "You lose...";
}
else {
    document.getElementById("not-a-number").innerHTML = "Error: enter a number";
}