window.addEventListener("load",function(){
    console.log("coucou je suis dans la console")
    var PC = document.getElementById("pc")
    var encart = document.getElementById("gout_dev")
    var button = document.querySelector(".closing")
    PC.addEventListener("click",function(){
        encart.style.display = "block"
    })
    button.addEventListener("click",function(){
        encart.style.display = "none"
    })
})