// VALEUR 1 DOLLAR VERS EURO ET YEN
const fromDollarToEuro = 0.88;
const fromDollarToYen = 113;

// VALEUR 1 EURO VERS DOLLAR ET YEN
const fromEuroToDollar = 1.12;
const fromEuroToYen = 128;

// VALEUR 1 YEN VERS DOLLAR ET EURO
const fromYenToDollar = 0.008;
const fromYenToEuro = 0.007;

// FONCTION
let getConversion = document.getElementById("letsConvert");
getConversion.addEventListener("click", function(){
    let getData = document.getElementById("getData").value;
    let getDeviseFrom = document.getElementById("deviseFrom").value;
    let getDeviseTo = document.getElementById("deviseTo").value;
    // ALGORYTHME
    if(getDeviseFrom === 'dollar' && getDeviseTo === 'euro'){
        let convertResult = fromDollarToEuro * getData;
        return document.getElementById("convertAnswer").innerHTML = `${convertResult} €` ; 
        // FROM DOLLAR
    } else if(getDeviseFrom === 'dollar' && getDeviseTo === 'yen'){
        convertResult = fromDollarToYen * getData;
        return document.getElementById("convertAnswer").innerHTML = `${convertResult} ¥` ;
        // FROM EURO
    } else if(getDeviseFrom === 'euro' && getDeviseTo === 'dollar'){
        convertResult = fromEuroToDollar * getData;
        return document.getElementById("convertAnswer").innerHTML = `${convertResult} $` ;
    } else if(getDeviseFrom === 'euro' && getDeviseTo === 'yen'){
        convertResult = fromEuroToYen * getData;
        return document.getElementById("convertAnswer").innerHTML = `${convertResult} ¥` ;
        // FROM YEN
    } else if(getDeviseFrom === 'yen' && getDeviseTo === 'dollar'){
        convertResult = fromYenToDollar * getData;
        return document.getElementById("convertAnswer").innerHTML = `${convertResult} $` ;
    } else if(getDeviseFrom === 'yen' && getDeviseTo === 'euro'){
        convertResult = fromYenToEuro * getData;
        return document.getElementById("convertAnswer").innerHTML = `${convertResult} €`;
        // NO DATA TO CONVERT
    } else {
        return document.getElementById("convertAnswer").innerHTML = 'No Data to convert';                                
    }
});