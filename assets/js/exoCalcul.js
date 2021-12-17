const numbers = [1, 8, 6 ,7 ,5 ,4, 6, 8, 6, 4, 5, 7, 9, 1, 4, 6, 7, 9, 5, 4];
console.table(numbers);
let numbersLength = numbers.length;
let i;
let firstSum = 0;
let secondSum = 0;
let thirdSum = 0;
let resultFirstAnswer = document.getElementById('calculatedFirst');
let resultSecondAnswer = document.getElementById('calculatedSecond');
let resultThirdAnswer = document.getElementById('calculatedThird');
let resultFinalAnswer = document.getElementById('calculatedFinal');

for(i=0; i < numbersLength; i++){
    if(numbers[i] < 5){
        firstSum += numbers[i];
        resultFirstAnswer.innerHTML = `La somme de tout les chiffres inférieurs à 5 : ${firstSum}`;
        // console.log(firstSum);
    } else if(numbers[i] > 5){
        secondSum += numbers[i];
        resultSecondAnswer.innerHTML = `La somme de tout les chiffres supérieurs à 5 : ${secondSum}`;
        // console.log(secondSum);
    } else if(numbers[i] === 5){
        thirdSum += 1;
        resultThirdAnswer.innerHTML = `Nombre de 5 dans le tableau : ${thirdSum}`;
        // console.log(thirdSum);
    };
    let finalResult = (secondSum - firstSum) * thirdSum;
    resultFinalAnswer.innerHTML = `Le résultat final de l'opération (${secondSum} - ${firstSum}) * ${thirdSum} = ${finalResult}`;
};