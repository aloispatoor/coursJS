//MODAL
function getImg(idModal){ //idModal sert à lier avec les onclick sur les buttons
    // console.log("test");
    let goodModal = document.getElementById(idModal);
    let getModals = document.querySelectorAll(".modal"); 
    /*^^^^^^^ Cela crée un tableau des .modal*/
    let modalsLength = getModals.length;

    // Boucle sur chaque élément pour y ajouter .displayNone un à un
    for (let i = 0; i < modalsLength; i++){
        getModals[i].classList.add("displayNone");
    }
    console.log(idModal);
    // Ouvrir la bonne modal et paramètrer le button 'close'
    if(idModal != 'close'){
        goodModal.classList.remove("displayNone");
    };
};




