alert("Benvenuto nel secondo Snack");

// Chiedo all'utente di inserire i tre numeri
const primoNumero = Number(prompt("Inserisci il primo numero"));

const secondoNumero = Number(prompt("Inserisci il secondo numero"));

const terzoNumero = Number(prompt("Inserisci il terzo numero"));


// Creo una variabile con nella quale mi calcolo la media

let mediaNumbers = (primoNumero + secondoNumero + terzoNumero) / 3;

// Do il risultato con due cifre decimali

mediaNumbers = mediaNumbers.toFixed(2);

// Scrivo il risultato in pagina

document.getElementById("esito").innerHTML = "La media risultante è " + mediaNumbers;
