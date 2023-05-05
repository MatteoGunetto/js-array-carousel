/* Dato un array contenente una lista di cinque immagini, creare un carosello come nello screenshot allegato.
MILESTONE 1
Per prima cosa, creiamo il markup statico: costruiamo il container e inseriamo un’immagine grande al centro: avremo così la struttura base e gli stili pronti per poterci poi concentrare solamente sull’aspetto logico.

MILESTONE 2
Adesso rimuoviamo tutto il markup statico e inseriamo tutte le immagini dinamicamente servendoci dell’array fornito e un semplice ciclo for che concatena un template literal. Tutte le immagini saranno nascoste, tranne la prima, che avrà una classe specifica che la renderà visibile. Al termine di questa fase ci ritroveremo con lo stesso slider stilato nella milestone 1, ma costruito dinamicamente attraverso JavaScript.
MILESTONE 3
Al click dell’utente sulle frecce, il programma cambierà l’immagine attiva, che quindi verrà visualizzata al posto della precedente. */

// creazione array e costanti 
let imageslist =["./img/01.webp", "./img/02.webp", "./img/03.webp", "./img/04.webp", "./img/05.webp"]
let posizioneImgesList = 0;
let newDivImages;
const container = document.getElementById("itemcontainer");


for(let i = 0; i < 5; i++){

    
    newDivImages = document.createElement("div");
    newDivImages.classList.add("item");

    
    if(posizioneImgesList === 0){
        newDivImages.classList.add("active");
    }

    
    container.append(newDivImages);
    newDivImages.innerHTML = `<img src="${imageslist[posizioneImgesList]}">`;

    
    posizioneImgesList = posizioneImgesList + 1;

    if(posizioneImgesList === 5){
        imageslist = 0;
    }
}

const ListDiv = document.getElementsByClassName("item");


const down = document.getElementById("down");

// Creo funzione per far scorrere immagini
down.addEventListener("click",
    function(){
        
        if(posizioneImgesList < imageslist.length){

            
            ListDiv[posizioneImgesList].classList.remove("active");

           
            posizioneImgesList = posizioneImgesList +1;

            
            ListDiv[posizioneImgesList].classList.add("active");

           
            if(posizioneImgesList === (imageslist.length -1)){

                down.classList.add("hidden");
            }

           
            if(posizioneImgesList === 1){
                up.classList.remove("hidden");
            }
        }
    }
)




const up = document.getElementById("up");


up.classList.add("hidden");

// Creo funzione per far scorrere immagini
up.addEventListener("click",
    function(){
        
        if(posizioneImgesList < imageslist.length){

           
           ListDiv[posizioneImgesList].classList.remove("active");

         
            posizioneImgesList = posizioneImgesList -1;

           
           ListDiv[posizioneImgesList].classList.add("active");

            
            if(posizioneImgesList === 0){

                up.classList.add("hidden");
            }
            
            if(posizioneImgesList === (imageslist.length - 2)){
                down.classList.remove("hidden");
            }
            
        }
    }
)






