// Chiedere all'utente 10 numeri diversi
let number = prompt("Insert a number!")


if(!isNaN(number)){
for (let number = 0; number < 9; number++) {
    console.log("Walking east one step");
  }
}
else {
    console.log("Error")
    document.getElementById("error").innerHTML = "Please, use only numbers!";
}

// Sommare i numeri ottenuti
