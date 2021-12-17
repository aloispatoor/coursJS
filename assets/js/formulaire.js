// Exercice Formulaire
// Constantes déclarées
const mention = 16;
const moyenne = 10;

//Fonction pour afficher un texte différent à l'id #paragraph selon la valeur tapée dans l'input
function getValue(){
//Variable déclarée servant à récupérer la valeur tapée dans l'input
    let input = document.getElementById("noteStudent").value;
    //Algorythme pour changer le texte de l'id #paragraph
    if (input >= moyenne && input < mention){
        return document.getElementById("paragraph").innerHTML = `Félicitation, vous avez votre diplôme`;
} else if (input >= mention){
        return document.getElementById("paragraph").innerHTML = `Wow, quelle masterclass ! Vous obtenez votre diplôme avec une mention !`;
} else {
        return document.getElementById("paragraph").innerHTML = `Dommage, vous n'avez pas obtenu votre diplôme.`;
        }
};
    