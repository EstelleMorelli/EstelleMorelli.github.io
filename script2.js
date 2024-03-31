const buttons = {

    init: function () {

        for (const button of document.querySelectorAll(".closingButton")) {
            button.addEventListener("click", buttons.handleDisplayParent);
        }
        for (const cImg of document.querySelectorAll(".clickImg")) {
            cImg.addEventListener("click", buttons.handleDisplayChild);
        }
        buttons.handleMusic();
    },

    handleDisplayParent: function (event) {

        buttons.changeDisplayParent(event.currentTarget);
    },
    handleDisplayChild: function (event) {

        buttons.changeDisplayChild(event.currentTarget);

    },

    changeDisplayParent: function (elementDisplay) {
        console.log(elementDisplay.parentNode);
        elementDisplay.parentNode.style.display = "none";
        console.log(elementDisplay.parentNode.style.display);
    },

    changeDisplayChild: function (elementDisplay) {
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
