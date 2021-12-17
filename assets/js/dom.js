//Variable pour changer le Background-color de toute la page

//const allPageBackground = document.querySelector("body");
//allPageBackground.style.backgroundColor="blue";

//Variable h1 pour changer sa couleur
const h1ColorChange = document.querySelector(".title");
    h1ColorChange.addEventListener("click", ()=> {
        h1ColorChange.style.color="red"
    });

//Ajouter une classe à un élément du HTML
const switchLight = document.getElementById("switchLight");
const switchDark = document.getElementById("switchDark");
const mainBackgroundColor = document.querySelector("main");
    switchLight.addEventListener("click", ()=>{
        mainBackgroundColor.classList.add("light")
        mainBackgroundColor.classList.remove("dark");
    });
    switchDark.addEventListener("click", ()=>{
        mainBackgroundColor.classList.add("dark")
        mainBackgroundColor.classList.remove("light");
    });


//CORRECTION
/*const switchLight = document.getElementById("switchLight");
const switchDark = document.getElementById("switchDark");
const mainBackgroundColor = document.querySelector("main");

function classDark(){
        mainBackgroundColor.classList.toggle("dark");
        switchDark.classList.toggle("red");
}

switchDark.addEventListener("click", classDark);*/

