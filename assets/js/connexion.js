//EXERCICE PAGE DE CONNECTION

function connexion(){
// Constantes déclarées
const trueMail = "jeanmichel@durand.fr";
const truePassword = "123456";
//Variables pour récupérer les valeurs tapées dans les input mail et password
let getMail = document.getElementById("mail").value;
let getPassword = document.getElementById("password").value;

// Si mail et password : ok
/* if(getMail === trueMail && getPassword === truePassword){
    return window.open('connected.html');
// //Si mail : ok et password : failed
    } else if(getMail === trueMail && getPassword !== truePassword) {
        return document.getElementById("additionalText").innerHTML =`Mot de passe non reconnu` 
         && document.getElementById("additionalText").classList.add("red");
// // Si mail : failed et password : ok
    } else if (getMail !== trueMail && getPassword === truePassword) {
        return document.getElementById("additionalText").innerHTML =`Adresse e-mail non reconnue` 
         && document.getElementById("additionalText").classList.add("red");
// // Si mail et password : failed
    } else {
        return document.getElementById("additionalText").innerHTML =`Mot de passe et adresse e-mail non reconnus` 
         && document.getElementById("additionalText").classList.add("red");
    }*/


//CORRECTION AVEC IF IMBRIQUÉS
    if(getMail.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/) && getPassword.length > 0){
        if(getMail === trueMail){
            if(getPassword === truePassword){
                // Si tout ok
                return window.open('connected.html'); //Redirection 
            }else{
                // Si only mail ok
                return document.getElementById("additionalText").innerHTML =`Mot de passe non reconnu`;
            }
        }else{
            // Si rien ok
            return document.getElementById("additionalText").innerHTML =`Adresse e-mail non reconnue`;    
        } 
    }else{
        return document.getElementById("additionalText").innerHTML =`L'adresse e-mail ET le mot de passe sont obligatoires`; 
    } 
};