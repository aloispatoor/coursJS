// afficher 3 alertes :
// Une avec un onclick, une avec un addlistener click, une avec un addlistener scroll.
// Au click du button 1, ajoute une class qui change la couleur de la div
// Au click du button 2, retire une class qui change la couleur de la même div
// Au scroll, change le bg color du body tout les scrolls de 150px;
// Nouveau button qui devient rouge, puis jaune, puis vert, puis rouge encore etc... (boucle :))
let firstAlert = document.getElementById('firstAlert')
firstAlert.onclick = function(){
    // alert("Je vais vous lire le temps des tempête");
    firstAlert.classList.add("red");
};
// AUTRE FAÇON DE FAIRE :
// function getAlert(){
//     alert("Bonjour c'est Nicolas Sarkozy");
// };

let secondAlert = document.getElementById('secondAlert');
secondAlert.addEventListener("click", function(){ 
    // alert("En exclusivité pour Audible"); 
    secondAlert.classList.remove("red");
});

// ALERTS MISES EN COMMENTAIRE PARCE QUE ÇA SINON POP TOUT LE TEMPS ET C'EST CHIANT
let body = document.getElementById('theBody')
 window.addEventListener("scroll", function(){
    //  alert("Bonjour, c'est Nicolas Sarkozy");
    if(window.scrollY = 150){
        body.style.backgroundColor = 'red';
    };
});

let red = document.querySelector('.red');
let yellow = document.querySelector('.yellow');
let green = document.querySelector('.green');
let thirdButton = document.getElementById('thirdButton');
let colors = [red, yellow, green];
let colorLength = colors.length;

for(let i=0; i <= colorLength; i++){
    thirdButton.addEventListener("click", function(){
        thirdButton.classList.add(colors[i]);
    });
    console.log(i);
};


    


