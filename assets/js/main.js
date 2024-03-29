/* L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata. */

//Bonus
/* Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
-con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per   10 righe;
-con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
-con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe; */

/* Scriviamo prima cosa vogliamo fare passo passo in italiano, dividiamo il lavoro in micro problemi.
Ad esempio:
Di cosa ho bisogno per generare i numeri?
Proviamo sempre prima con dei console.log() per capire se stiamo ricevendo i dati giusti.
Eventuali validazioni e controlli possiamo farli anche in un secondo momento. */



/* L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata. */

const selectEl = document.getElementById("difficulty");
let numCells;

// L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
document.getElementById('generate_grid').addEventListener('click', function () {


  /* Creare una griglia in base alla scelta dell'utente: facile/medio/difficile
   Ogni volta che clicco su un quadrato si colora di azzurro */

  // Creo una variabile dove salvo il container delle n celle (container-grid)
  const container = document.querySelector("main .container");
  container.innerHTML = '';
  
  // creo un max numero di celle
  //+ bonus
  numCells = Number(selectEl.value);
  console.log(numCells);


  // creo un ciclo n volte per le celle
  for (let i = 0; i < numCells; i++) {
    const numCell = Number(i + 1);
    //console.log(numCell);
    const cell = `<div class="cell d-flex align-items-center justify-content-center">${numCell}</div>`;
    container.innerHTML += cell;
  }

  // seleziono una cella che ha classe cell 
  const cellEl = document.querySelectorAll(".cell")


  // aggiungo eventlisner per la classe active ciclando per la lunghezza dell'array cellEl
  for (let i = 0; i < cellEl.length; i++) {
    const thisCell = cellEl[i];
    console.log(thisCell)

    thisCell.addEventListener("click", function () {
      
      //creo costante per stampare il numero della cella cliccata in console
      const numberCell = Number(i + 1);

      // cambio colore ogni volta che clicco sulla cella
      thisCell.classList.toggle("bg_azure")
      console.log("Changed the color")
      
      //creo costante per stampare il numero della cella cliccata in console
      console.log(numberCell);
    })
  }
})






