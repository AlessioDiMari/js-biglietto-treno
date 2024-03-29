// Il programma dovrà chiedere all'utente il numero di chilometri 
// che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà 
// calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65



// Chiedo i chilometri da percorrere e l'età

const chilometri = prompt("Quanti chilometri devi fare?");

const age = prompt("Quanti anni hai?");


// dichiaro la costante per la quale viene calcolato
// il prezzo del biglietto

const costo = chilometri * 0.21;


// Creo un if per verificare se in base all'età il passeggero 
// ha uno sconto sul costo del biglietto

// Verifico se il paseggero ha meno di 18 anni
if ( age < 18 ) {
        
    const sconto = costo * 0.20;

    const totaleprezzo = costo - sconto;

    document.getElementById("esito").innerHTML = `Il biglietto ti costerà ${totaleprezzo} €`;

} else if ( age > 64 ) {

    // Verifico se il passeggero ha più di 65 anni
    
    const sconto = costo * 0.40;

    const totaleprezzo = costo - sconto;

    document.getElementById("esito").innerHTML = `Il biglietto ti costerà ${totaleprezzo} €`;

} else {

    // Verifico se il passeggero non soddisfa
    // ne la prima ne la seconda condizione

    document.getElementById("esito").innerHTML = `Il biglietto ti costerà ${costo} €`;

}