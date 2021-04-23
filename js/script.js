/* Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età.
Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell’oggetto.
Creare un array di oggetti di studenti.
Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.
Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età. */

var accountStudent = {
  Nome : 'Giuseppe',
  Cognome : 'Napoli',
  Età : 27,
}

for(var key in accountStudent){
  //console.log("Le parole chiavi dell'oggetto sono: - " + key + " - il loro valore è il seguente: - " + accountStudent[key] + " - ");
}

//Creare un array di oggetti di studenti.
var accounts = [
  {
    Nome : 'Giuseppe',
    Cognome : 'Napoli',
    Età : 27,
  },
  {
    Nome : 'Luca',
    Cognome : 'Rossi',
    Età : 30,
  },
  {
    Nome : 'Cristina',
    Cognome : 'Benali',
    Età : 20,
  },
  {
    Nome : 'Francesco',
    Cognome : 'Micali',
    Età : 46,
  },
  {
    Nome : 'Giovanni',
    Cognome : 'Verdi',
    Età : 32,
  }
];

//Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere un nuovo oggetto studente

var newName = prompt('Inserisci il tuo nome');
var newSurname = prompt('Inserisci il tuo cognome');
var newAge = parseInt(prompt("Inserisci la tua eta'"));

accounts.push({
  Nome: newName,
  Cognome: newSurname,
  Età: newAge
})

console.log(accounts);
//Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.

for (var people of accounts){
  for(var chiave in people){
    console.log("Il dato dell'utente è: " +chiave +": " + people[chiave])
  }
}
