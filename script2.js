const buttons = {

    allArticles: document.querySelectorAll("article"),
    allHelpText: document.querySelectorAll(".helpText"),
    message: document.querySelector("#indication"),
     
    init: function () {

        for (const button of document.querySelectorAll(".closingButton")) {
            button.addEventListener("click", buttons.handleDisplayParents);
        }
        for (const cImg of document.querySelectorAll(".clickImg")) {
            cImg.addEventListener("click", buttons.handleDisplayChild);
        }
        for (const goNextButton of document.querySelectorAll(".goNextButton")){
            goNextButton.addEventListener("click", buttons.handleDisplayBrother);
        }
        buttons.handleMusic();
        buttons.message.style.display='block';
        setTimeout(buttons.handleDisapearMessage, 7000);
    },

    handleDisplayParents: function (event) {

        buttons.changeDisplayParents(event.currentTarget);
    },
    handleDisplayChild: function (event) {

        buttons.changeDisplayChild(event.currentTarget);

    },

    changeDisplayParents: function (elementDisplay) {
        elementDisplay.parentNode.style.display = "none";     
    },

    changeDisplayChild: function (elementDisplay) {
        for (const article of buttons.allArticles){
            article.style.display = "none";
         }
        elementDisplay.nextElementSibling.style.display = "block";
    },

    handleMusic: function () {
        // Récupérer l'élément image et l'audio
        var playButton = document.getElementById("radio");
        var audio = document.getElementById("myAudio");

        // Fonction pour jouer ou mettre en pause la musique
        function toggleAudio() {
            if (audio.paused) {
                audio.play();
                
            } else {
                audio.pause();
            }
        }

        // Ajouter un événement de clic à l'image
        playButton.addEventListener("click", toggleAudio);

    },
    handleDisapearMessage: function (){
        buttons.message.classList.add("fade-out");
        setTimeout(function(){
        buttons.message.style.display= 'none';
        }, 15000);
    },
    handleDisplayBrother: function (event){
        buttons.changeDisplayBrother(event.currentTarget);
    },

    changeDisplayBrother: function (elementDisplay) {
        elementDisplay.parentNode.style.display = "none";
        console.log(elementDisplay.parentNode);
        console.log(elementDisplay.parentNode.nextElementSibling);
        elementDisplay.parentNode.nextElementSibling.style.display = "block";
    },
};

document.addEventListener("DOMContentLoaded", buttons.init);
