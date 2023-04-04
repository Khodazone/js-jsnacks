// Chiedere all'utente 10 numeri diversi e sommare
let sum = 0

for (let i = 0; i < 10; i++) {
    let number = prompt("Choose a number");
    let num = parseInt(number);

    // += equivalente a fare variabile = variabile + num
    sum += num;
  }

console.log(sum);