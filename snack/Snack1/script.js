// do il benvenuto

alert("Benvenuto nel primo snack");


// Chiedo la quantità di gradi che l'utente
// deve convertire

const gradiCelsius = prompt("Quanto é la temperatura?");

// Ricavo i gradi in Fahrenheit con una formula
gradiFahrenheit = (gradiCelsius * 9 / 5) + 32;

// Stampo il risultato in pagina

document.getElementById("esito").innerHTML = "La temperatura è di " + gradiFahrenheit + "°F!";