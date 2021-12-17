// BOUCLE FOR
//for(initialisation, condition, expression finale){
    // Ordre-s, action-s à éxécuter
//}

// const notes = [4, 8, 6, 5, 7, 9, 8, 5];
// let somme = null; 
// let i; /*La variable i (iteration) sert à déclarer les tours*/
// let length = notes.length; /*Nb de lignes dans le tableau */

// for(i = 0; i < length; i++){ 
    /*i = 0 : i part de la ligne 0; i < length : i ne va pas plus loin que le nb de ligne du tableau notes; i++ : i passe chaque fois d'une ligne à une autre, ++ : +1 à i=0 */
//     somme += notes[i];
//     console.log(i);
// };
// let middle = somme / length; /* Calcul de la moyenne */
// console.log(somme);
// console.log(middle);

// EXERCICE 
let i;
let tableLength = 10;

for(i = 0; i < tableLength; i++){
    // console.log(i);
};
for(i = 10; i > 0; i--){
    // console.log(i);
};

// EXERCICE 2
// let j;
// let nbrPair = "pair";
// let nbrImpair = "impair";
// let anotherLength = 100;

// for(j = 0; j <= anotherLength; j++){
//     if(j%2 == 0){
//         console.log(j, nbrPair);
//     }else{
//         console.log(j, nbrImpair);
//     }   
// };

//EXERCICE 3
// let k;
// let l;
// for(k = 0; k <= 10; k++){
//     for(l = 1; l <= k+1; l++){
//         document.write(k);
//         document.write(l);
//         console.log(k, l);
//     }
// };
/**
 * 1
 * 12
 * 123
 * 1234
 * 12345
 */

// BOUCLE WHILE
// let compteur = 0;
// while (compteur < 20){
//     console.log(compteur)
//     compteur += 1;
// }

// EXERCICE WHILE
let reverseCounter = 20;
while (reverseCounter >= 4){
    if(reverseCounter === 13){
        console.log("chiffre porte bonheur");
    } else {
    console.log(reverseCounter)
    }
    reverseCounter -= 1;
}


