// EXERCICE SUR LES BOUCLES

//Variables images
let imgHelene = document.createElement("img");
imgHelene.src = "../img/helene.jpg";
// console.log(imgHelene);

let imgPierre = document.createElement("img");
imgPierre.src = "../img/Pierre.jpg";
// console.log(imgPierre);

let imgJuliette = document.createElement("img");
imgJuliette.src = "../img/juliette.jpg";
// console.log(imgJuliette);

let imgMomo = document.createElement("img");
imgMomo.src = "../img/Momo.jpg";
// console.log(imgMomo);

//Tableau
const students = [
    { name: "Helene", age: 21, img: imgHelene, description: "Aime l'aquaponey" },
    { name: "Pierre", age: 19, img: imgPierre, description: "Fan de Nicolas Sarkozy"},
    { name: "Juliette", age: 22, img: imgJuliette, description: "Porte des Sarouels"},
    { name: "Momo", age: 20, img: imgMomo, description: "s'appelle Jean-Baptiste en vrai mais faut pas lui dire"},
];
console.table(students);

let i;
let j;
let arrayLength = students.length;

for(i = 0; i < arrayLength; i++){
    for(j = 0; j < 5; j++){
        name = document.getElementById("name").innerHTML;
        console.log(j);
    }
}