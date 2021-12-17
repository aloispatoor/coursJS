//Exercice Distance
// Valeur en KM
let left;
let right;

//ALGORYTHME
if(left > right){
    console.log(`Tournez à droite`);
} else {
    console.log(`Tournez à gauche`);
}
//FONCTION
function direction(left, right){
    if(left > right){
        alert(`Tournez à droite`);
    } else {
        alert(`Tournez à gauche`);
    }
};