// Chiedi all’utente il suo nome
let myName = prompt("What's your name?")
let guestList = ["Davide", "Marco", "Francis", "Trevor", "Michael"];

// Comunica se l'utente può partecipare o no alla festa
if(isNaN(myName) && myName.includes("Davide", "Marco", "Francis", "Trevor", "Michael")){
    document.getElementById("onTheList").innerHTML = myName;
    document.getElementById("congratulations").innerHTML = "Congratulations, you are on the list!";
}
else if(isNaN(myName) && !myName.includes("Davide", "Marco", "Francis", "Trevor", "Michael")){
    document.getElementById("outOfTheList").innerHTML = myName;
    document.getElementById("sorry").innerHTML = "Unfortunately you are not on the list!";
}
else {
    document.getElementById("error").innerHTML = "Error, insert your name please!";
}