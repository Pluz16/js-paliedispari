// Palidroma
// Chiedere all’utente di inserire una parola
let parola = (prompt('Inserire una parola palindroma'))

// Creare una funzione per capire se la parola inserita è palindroma
function palindroma() {
    var risultatoFx = parola.split("").reverse().join("");
    
       if (parola == risultatoFx) {
         return parola + " è palindroma";
       }
    
       else {
         return parola + " non è palindroma";
       }
     }

     var controllo = palindroma(parola);
        console.log(controllo);

// Comunicare all’utente (decidete voi come) se la parola che ha inserito è palindroma oppure no



// Pari o dispari

// L’utente sceglie pari o dispari e un numero da 1 a 5.
 var scelta1 = prompt("Scrivi pari o dispari");
 var sceltaGiocatore = parseInt(prompt("scrivi un numero da 1 a 5"));
 var sceltaComputer = getRandomIntInclusive(1,5);
 var numero = console.log(sceltaComputer);
//  Sommiamo i due numeri
 var sommaNumeri = sceltaGiocatore + sceltaComputer;

 // Generiamo un numero random (sempre da 1 a 5) per il computer.
 function getRandomIntInclusive(min, max) {
   min = Math.ceil(min);
   max = Math.floor(max);
   return Math.floor(Math.random() * (max - min + 1)) + min;
 }

//  (controlliamo se la somma da pari o dispari)
 if (sommaNumeri % 2 == 0) {
   console.log(sommaNumeri + " è pari");
 }
 else {
   console.log(sommaNumeri + " è dispari");
 }


//  dichiariamo chi ha vinto .
 if(sceltaComputer < sceltaGiocatore){
    console.log('vince utente')
 } else{
    console.log('vince computer')
 }