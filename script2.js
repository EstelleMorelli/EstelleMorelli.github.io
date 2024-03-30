const buttons = {

    init: function(){
        
        for (const button of document.querySelectorAll(".closingButton")){
            button.addEventListener("click", buttons.handleDisplayParent);
        }
        for (const cImg of document.querySelectorAll(".clickImg")){
            cImg.addEventListener("click", buttons.handleDisplayChild);
        }
    },

    handleDisplayParent: function(event){

        buttons.changeDisplayParent(event.currentTarget);
    },
    handleDisplayChild: function(event){

        buttons.changeDisplayChild(event.currentTarget);
        
    },

    changeDisplayParent: function(elementDisplay){
        console.log(elementDisplay.parentNode);
        elementDisplay.parentNode.style.display = "none";
        console.log(elementDisplay.parentNode.style.display);    
    },
    
    changeDisplayChild: function(elementDisplay){
        elementDisplay.nextElementSibling.style.display = "block";
    },
};



document.addEventListener("DOMContentLoaded", buttons.init);
