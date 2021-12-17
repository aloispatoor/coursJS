// VARIABLES NUMBER
// VALEURS EN CL
// const bigBottles = 150;
// const notSoBigBottles = 100;
// const littleBigBottles = 50;
// const shittyBottles = 33;
// let numberOf150Bottles = 0;
// let numberOf100Bottles = 0;
// let numberOf50Bottles = 0;
// let numberOf33Bottles = 0;
// let waterWeGet = 1000;
// // VARIABLES POUR INNER HTML
// let getNumberOf150Bottles = document.getElementById('15bottles');
// let getNumberOf100Bottles = document.getElementById('1bottles');
// let getNumberOf50Bottles = document.getElementById('50bottles');
// let getNumberOf33Bottles = document.getElementById('33bottles');

// // ZE BOUCLE OF ZE DEAD
// while (waterWeGet > 0){
//     console.log('test');

//     // BOUTEILLES DE 1.5L
//     if(numberOf150Bottles >= 400){
//         numberOf150Bottles = waterWeGet / bigBottles;
//         getNumberOf150Bottles.innerHTML = `Nous pouvons fournir ${numberOf150Bottles} bouteilles de 1.5L`;
//     } 
//     waterWeGet -= numberOf150Bottles;
//     console.log(waterWeGet);

//     // BOUTEILLES DE 50CL
//     if(numberOf50Bottles >= 200){
//         numberOf50Bottles = waterWeGet / littleBigBottles;
//         getNumberOf50Bottles.innerHTML = `Nous pouvons fournir ${numberOf50Bottles} bouteilles de 50cl`;
//     }
//     waterWeGet -= numberOf50Bottles;
//     console.log(waterWeGet);

//     // BOUTEILLES DE 33CL
//     if(numberOf33Bottles <= 150){
//         numberOf33Bottles = waterWeGet / shittyBottles;
//         getNumberOf33Bottles.innerHTML = `Nous pouvons fournir ${numberOf33Bottles} bouteilles de 33cl`;
//     }else{
//         // BOUTEILLES DE 1L
//         numberOf100Bottles = waterWeGet / notSoBigBottles;
//         getNumberOf100Bottles.innerHTML = `Nous pouvons fournir ${numberOf100Bottles} bouteilles de 1L`;
//     } 
//     waterWeGet -= numberOf100Bottles + numberOf33Bottles;
//     console.log(waterWeGet);

//     // MESSAGES D'ERREURS
//     if(waterWeGet <= 0) {
//         document.getElementById('error').innerHTML = `A pu d'eau là`;
//     }else{
//         document.getElementById('error').innerHTML = `No Valid Data`;
//     };
// };

//CORRECTION
function bottle(){
    var arrivage = 1000;
    var BigSize = 0;
    var mediumSize = 0;
    var littleSize = 0;
    var normalSize = 0;

    while(arrivage > 0){
        if(BigSize > 400){
            BigSize += 1;
            arrivage -= 1.5;
        }else if(normalSize > 200){
            normalSize += 1;
            arrivage -= 0.5;
        }else{
            if(littleSize < 150){
                littleSize += 1;
                arrivage -= 0.33;
            }
            if(mediumSize < 100){
                mediumSize += 1;
                arrivage -= 1;
            }
            BigSize += 1;
            normalSize += 1;
            arrivage -= 2;
        }
    }
}

// J'AI ESSAYÉ LE SWITCH MAIS C'ÉTAIT PAS OUF
// switch(i){
    //     case 0 : //1.5L
    //         numberOf150Bottles = waterWeGet / bottles[i];
    //         waterWeGet -= numberOf150Bottles;
    //         numberOf150Bottles > 400;
    //         getNumberOf150Bottles.innerHTML = `Nous pouvons fournir ${numberOf150Bottles} bouteilles de 1.5L`;
    //         console.log(waterWeGet);
    //     case 2 : //50cl
    //         numberOf50Bottles = waterWeGet / bottles[i];
    //         waterWeGet -= numberOf50Bottles;
    //         numberOf50Bottles > 200;
    //         getNumberOf50Bottles.innerHTML = `Nous pouvons fournir ${numberOf50Bottles} bouteilles de 50cl`;
    //         console.log(waterWeGet);
    //     case 3 : //33cl
    //         numberOf33Bottles = waterWeGet / bottles[i];
    //         waterWeGet -= numberOf33Bottles;
    //         numberOf33Bottles < 150;
    //         getNumberOf33Bottles.innerHTML = `Nous pouvons fournir ${numberOf33Bottles} bouteilles de 33cl`;
    //         console.log(waterWeGet);
    //     case 1 : //1L
    //         numberOf100Bottles = waterWeGet / bottles[i];
    //         waterWeGet -= numberOf100Bottles;
    //         getNumberOf100Bottles.innerHTML = `Nous pouvons fournir ${numberOf100Bottles} bouteilles de 1L`;
    //         console.log(waterWeGet);
    //         break;
    //     default :
    //         document.getElementById('error').innerHTML = `No Valid Data`;
    // };