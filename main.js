//Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
//Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
//- il prezzo del biglietto è definito in base ai km (0.21 € al km)
//- va applicato uno sconto del 20% per i minorenni
//- va applicato uno sconto del 40% per gli over 65.
//- L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.




// ho fatto il primo push rendendo pubblica su github ma avevo già inizializzato le variabili

//inizializiamo le variabili
//facciamo la condizione con gli sconti e calcoliamo li il prezzo scontato, se la condizione non si verifica prezzo base



function calcoloPrezzo() {

     

const eta = parseInt(prompt("quanti anni hai?"));
const km = parseFloat(prompt("quanti chilometri vuoi percorrere?"));
const prezzoBase = km * 0.21;
let prezzoFinale= prezzoBase;


if (eta < 18) {
prezzoFinale = prezzoBase * 0.80;
} else if (eta > 65){
    prezzoFinale = prezzoBase * 0.60;
}

alert("per te il costo del biglietto è: €" + prezzoFinale.toFixed(2));

}


calcoloPrezzo();