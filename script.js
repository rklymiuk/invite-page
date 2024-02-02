"use strict";
function onYes(){
    window.open("yesPage.html", "_self");
}
const noButton = document.getElementById('noButton');
function onNo() {
    var x = Math.random() * (window.innerWidth - noButton.offsetWidth);
    var y = Math.random() * (window.innerHeight - noButton.offsetHeight);
    noButton.style.left = `${x}px`;
    noButton.style.top = `${y}px`;
    
}
