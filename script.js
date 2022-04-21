/*

**Consegna**
L’utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata, in cui ogni cella contiene un numero tra quelli compresi in un range:
con difficoltà 1 => tra 1 e 100
con difficoltà 2 => tra 1 e 81
con difficoltà 3 => tra 1 e 49
Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro.


*/

const container = document.querySelector(".container");
console.log(container);


// inizio()
// creo function di iniziazione
function inizio() {
  // creo ciclo for per creazione quadratini *100
  for (let i = 0; i < 100; i++) {
    console.log(i);
  }
}


// creo funzione per creare div quadratino 

function generateSquare(target) {
  const  quadratino = document.createElement("div");
  quadratino.className = "square square100";
  console.log(quadratino);
}

generateSquare();