// Palidroma
// Chiedere all’utente di inserire una parola
let parola = (prompt('Inserire una parola palindroma'))

// Creare una funzione per capire se la parola inserita è palindroma
function palindromo(str) {
    const parola = str.toLowerCase().replace(regex, '');
	const lunghezza = parola.length;

	for (let i = 0; i < lunghezza / 2; i++) {
		if (parola[i] !== parola[lunghezza - 1 - i]) {
			return false;
		}
	}

	return true;
}
console.log(palindromo('tomomot'));

// Comunicare all’utente (decidete voi come) se la parola che ha inserito è palindroma oppure no