// Palidroma
// Chiedere all’utente di inserire una parola
let parola = (prompt('Inserire una parola palindroma'))

// Creare una funzione per capire se la parola inserita è palindroma
function palindroma() {
    var risultato = parola.split("").reverse().join("");
    
       if (parola == risultato) {
         return parola + " è palindroma";
       }
    
       else {
         return parola + " non è palindroma";
       }
     }

     var controllo = palindroma(parola);
        console.log(controllo);

// Comunicare all’utente (decidete voi come) se la parola che ha inserito è palindroma oppure no