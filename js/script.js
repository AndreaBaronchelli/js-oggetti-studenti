/****************************************************************
 * ESERCIZIO 1
 * Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età. 
 * Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell'oggetto.
***************************************************************/

var student = {
    nome: "ANDREA",
    cognome: "BARONCHELLI",
    eta: 31,
}

for(var key in student) {
    console.log(student[key]);
};

/****************************************************************
 * ESERCIZIO 2
 * Creare un array di oggetti di studenti. 
 * Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.
***************************************************************/

var students = [
    {
        nome: "ANDREA",
        cognome: "BARONCHELLI",
        eta: 31,
    },
    {
        nome: "LUCA",
        cognome: "ROSSI",
        eta: 25,
    },
    {
        nome: "GIANNI",
        cognome: "NERI",
        eta: 35,
    },
    {
        nome: "STEFANO",
        cognome: "VERDI",
        eta: 56,
    },
];

for(var i = 0; i < students.length; i++) {
    console.log(students[i].nome + " " + students[i].cognome);
};

/****************************************************************
 * ESERCIZIO 3
 * Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere un nuovo oggetto studente 
 * inserendo nell’ordine: nome, cognome e età. 
 * Una volta creato il nuovo oggetto inserirlo nell'array creato al punto 2 e 
 * mostrare alla fine il contenuto dell'array.
***************************************************************/

var newStudent = {};

newStudent.nome = prompt("Inserisci il tuo nome").toUpperCase().trim();
newStudent.cognome = prompt("Inserisci il tuo cognome").toUpperCase().trim();
newStudent.eta = parseInt( prompt("Inserisci la tua età") );

students.push(newStudent);
console.log(students);