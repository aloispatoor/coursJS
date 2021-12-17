let wordsAnswer = document.getElementById('wordsAnswer');
wordsAnswer.addEventListener('click', function(){
    let inputWords = document.getElementById('words').value;
    let wordCounter = 0;
    console.log('test');
    for (let i = 1; i < inputWords.length; i++) {
        let currentCharacter = inputWords[i];
        if (currentCharacter === " ") {
            wordCounter += 1;
        };
    };
    document.getElementById("getWords").innerHTML = `Il y a ${wordCounter} mots`;
});
