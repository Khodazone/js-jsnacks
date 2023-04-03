/*
    // Tabella del 2 fino al numero 1000
    for(let i=2; i<=1000; i=i+2){
        console.log(i);
    }
*/

// Modificare in modo che venga chiesto all'utente il numero massimo consentito, poi stampare la tabella del 2 fino al numero massimo consentito
let maxNumber = prompt("Choose a maximum number!");

/*for(let i=2; i<=maxNumber; i=i+2){
    if(isNaN(maxNumber)){
        console.log("Error");
        document.getElementById("error").innerHTML = "Error: enter a correct number!";
    }
    else if(!isNaN(maxNumber)){
        console.log(i);
        document.getElementById("table").innerHTML = (i);
    }
}*/



if(!isNaN(maxNumber)){
    for(let i=2; i<=maxNumber; i=i+2){
        console.log(i);
        document.getElementById("table").innerHTML = (i);
    }
}
else {
    console.log("Error");
    document.getElementById("error").innerHTML = "Error: enter a correct number!";
}