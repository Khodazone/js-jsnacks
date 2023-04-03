// L’utente inserisce due numeri in successione, con due prompt
let number1 = prompt("Choose the first number: ");
let number2 = prompt("Choose the second number: ");

// Il software sceglie e stampa il maggiore
if(!isNaN(number1) && !isNaN(number2)){
    if (number1 < number2){
        console.log(number2);
        document.getElementById("second-number").innerHTML = number2;
    }
    else if (number1 > number2){
        console.log(number1);
        document.getElementById("first-number").innerHTML = number1;
    }
    else {
        console.log("Error: the numbers are equal.");
    }
} 
else {
    console.log("Insert two numbers!");
}