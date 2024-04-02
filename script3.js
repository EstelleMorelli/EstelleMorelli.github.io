const star = {
  radio: document.querySelector('#radio'),

  init: function () {
    star.radio.addEventListener("click", star.mouseStar);
  },

  mouseStar: function () {
    star.radio.classList.toggle("on");
    if (star.radio.classList.contains("on")){
    document.addEventListener("mousemove", function(e) {
      let note = document.createElement("div");
      note.className = "note";
      note.style.left = e.pageX + "px";
      note.style.top = e.pageY + "px";
      document.body.appendChild(note);

      setTimeout(function () {
        note.remove();
      }, 2000); // Supprime la note après 2 secondes
    });}
  },
};

document.addEventListener("DOMContentLoaded", star.init);