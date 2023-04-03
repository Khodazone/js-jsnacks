// L’utente inserisce due parole in successione, con due prompt
let word1 = prompt("Choose the first word:");
let word2 = prompt("Choose the second word:");

// Il software sceglie e stampa prima la parola più corta, poi la parola più lunga
if(isNaN(word1) && isNaN(word2)){
    if (word1.length < word2.length){
        console.log(word2);
        document.getElementById("word2>word1").innerHTML = word1;
        document.getElementById("word1<word2").innerHTML = word2;
    }
    else if (word1.length > word2.length){
        console.log(word1);
        document.getElementById("word2<word1").innerHTML = word2;
        document.getElementById("word1>word2").innerHTML = word1;
    }
    else {
        console.log("Error: words have the same length.");
    }
} 
else {
    console.log("Error: insert two words!");
}

