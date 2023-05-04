/* Dato un array contenente una lista di cinque immagini, creare un carosello come nello screenshot allegato.
MILESTONE 1
Per prima cosa, creiamo il markup statico: costruiamo il container e inseriamo un’immagine grande al centro: avremo così la struttura base e gli stili pronti per poterci poi concentrare solamente sull’aspetto logico.

MILESTONE 2
Adesso rimuoviamo tutto il markup statico e inseriamo tutte le immagini dinamicamente servendoci dell’array fornito e un semplice ciclo for che concatena un template literal. Tutte le immagini saranno nascoste, tranne la prima, che avrà una classe specifica che la renderà visibile. Al termine di questa fase ci ritroveremo con lo stesso slider stilato nella milestone 1, ma costruito dinamicamente attraverso JavaScript.
MILESTONE 3
Al click dell’utente sulle frecce, il programma cambierà l’immagine attiva, che quindi verrà visualizzata al posto della precedente. */

// creazione array e costanti 
const images =["./img/01.webp", "./img/02.webp", "./img/03.webp", "./img/04.webp", "./img/05.webp"]



const items =document.querySelectorAll(".item");
console.log(items);
console.log(images);

let activeitem = 0;
const down = document.querySelector("#down");
console.log(down);

down.addEventListener("click",
function (){

    if(activeitem < items.length - 1 ){

        items[activeitem].classList.remove("active");
    
        activeitem=activeitem + 1;
    
        items[activeitem].classList.add("active");
        

    }
}

)
const up = document.querySelector("#up");
console.log(up);

up.addEventListener("click",
function (){
    console.log(activeitem);

    if(activeitem > items.length -1 ){

        items[activeitem].classList.add("active");
    
        activeitem=activeitem +1;
    
        items[activeitem].classList.remove("active");
        

    }
}

)





