'use strict';

const box = document.querySelector('.box');

let observer = new MutationObserver(mutationRecord =>{
    console.log(mutationRecord[0].addedNodes); // MutationObserver przyjmuje callback funkcje z argumentem, ktory przyjmuje zmiany 
}); // sledzenie zmina na elemencie, dokonanych przez uzytkownika 

observer.observe(box, {
    childList: true
})// metoda observe() ma dwa argumenty. 1: element za ktorym obserwujemy i 2. konfigyracja  to object {}


// osbesrver dziala juz z resultatem dzialania 

observer.disconnect(); // przestaje sledzic 