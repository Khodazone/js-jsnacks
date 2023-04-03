// L’utente inserisce due parole in successione con due prompt e poi calcola le lunghezze
let word1 = prompt("Choose the first word:");
let word2 = prompt("Choose the second word:");
let lenghtWord1 = word1.length;
let lenghtWord2 = word2.length;

// Il software sceglie e stampa prima la parola più corta, poi la parola più lunga
if(isNaN(word1) && isNaN(word2)){
    if (lenghtWord1 < lenghtWord2){
        console.log(word2);
        document.getElementById("word2-major").innerHTML = word1;
        document.getElementById("word1-minor").innerHTML = word2;
    }
    else if (lenghtWord1 > lenghtWord2){
        console.log(word1);
        document.getElementById("word2-minor").innerHTML = word2;
        document.getElementById("word1-major").innerHTML = word1;
    }
    else {
        console.log("Error: words have the same length.");
    }
} 
else {
    console.log("Error: insert two words!");
}

