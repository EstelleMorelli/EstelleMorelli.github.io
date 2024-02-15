window.addEventListener("load",function(){
    console.log("coucou je suis dans la console")
    var PC = document.getElementById("pc")
    var competences = document.getElementById("gout_dev")
    var button1 = document.querySelector(".closingpc")
    
    PC.addEventListener("click",function(){
        competences.style.display = "block"
    })
    button1.addEventListener("click",function(){
        competences.style.display = "none"
    })

    var radio = document.getElementById("radio")
    var musique = document.getElementById("music")
    var button2 = document.querySelector(".closingradio")

    radio.addEventListener("click",function(){
        musique.style.display = "block"
    })
    button2.addEventListener("click",function(){
        musique.style.display = "none"
    })

    var book = document.getElementById("book")
    var aboutme = document.getElementById("aboutme")
    var button3 = document.querySelector(".closingbook")
    
    book.addEventListener("click",function(){
        aboutme.style.display = "block"
    })
    button3.addEventListener("click",function(){
        aboutme.style.display = "none"
    })

    
    
})
