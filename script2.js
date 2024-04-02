const buttons = {

    allArticles: document.querySelectorAll("article"),
     
    init: function () {

        for (const button of document.querySelectorAll(".closingButton")) {
            button.addEventListener("click", buttons.handleDisplayParents);
        }
        for (const cImg of document.querySelectorAll(".clickImg")) {
            cImg.addEventListener("click", buttons.handleDisplayChild);
        }
        buttons.handleMusic();
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
};

document.addEventListener("DOMContentLoaded", buttons.init);
