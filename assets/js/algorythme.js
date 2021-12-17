// Exercice Comparateur de notes
let note = 19;
console.log(`Le résultat final de votre examen est de :${note}`);

const mention = 16;
const moyenne = 10;
// Comparaison note - moyenne - mention
if (note >= moyenne && note < mention){
    console.log(`Félicitation, vous avez votre diplôme avec une note de ${note}`);
} else if (note >= mention){
    console.log(`Wow, quelle masterclass ! Votre note étant de ${note}, vous obtenez votre diplôme avec une mention !`);
} else {
    console.log(`Dommage, vous n'avez pas obtenu votre diplôme. Votre note est de ${note}`);
};

//Connaître le type d'une variable via console.log
console.log(typeof note);

// Exercice de Fonction
let noteStudent;
function examResults (noteStudent){
    const mention = 16;
    const moyenne = 10;
    if (noteStudent >= moyenne && noteStudent < mention){
        return(`Félicitation, vous avez votre diplôme avec une note de ${noteStudent}`);
    } else if (noteStudent >= mention){
        return(`Wow, quelle masterclass ! Votre note étant de ${noteStudent}, vous obtenez votre diplôme avec une mention !`);
    } else {
        return(`Dommage, vous n'avez pas obtenu votre diplôme. Votre note est de ${noteStudent}`);
    };   
}

//Exercice Calculatrice
let chiffre;
let resultat = 0;
function plus (chiffre){
    resultat += chiffre;
    return(resultat);
    };

function moins (chiffre){
    resultat -= chiffre;
    return(resultat);
    };

function diviser (chiffre){
    resultat /= chiffre;
    return(resultat);
    };

function multiplier (chiffre){
    resultat *= chiffre;
    return(resultat);
    };

function effacer(){
    resultat = 0;
    return(resultat);
    };

