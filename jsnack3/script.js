// Chiedere all'utente 10 numeri diversi
let number = prompt("Insert a number!")

if(!isNaN(number)){
for (let i = 0; i < 10; i++) {
    console.log(i);
  }
}
else {
    console.log("Error")
    document.getElementById("error").innerHTML = "Please, only use numbers!";
}

// Sommare i numeri ottenuti
