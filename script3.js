const star = {
  body: document.querySelector('body'),
  radio: document.querySelector('#radio'),

  init: function () {
    star.radio.addEventListener("click", star.radioToggle);
  },

  radioToggle: function () {
    star.radio.classList.toggle("on");
    if (star.radio.classList.contains("on")) {
      //document.querySelector(".scripts").innerHTML = '<script class="script3" src="script3.js"></script>';
      document.querySelector(".styles").innerHTML ='<link class="style2" href="style2.css" rel="stylesheet">';
      star.mouseStar();
    } else {
      document.querySelector(".style2").remove();
     }
  },

  mouseStar: function () {
    document.addEventListener("mousemove", function (e) {
      let note = document.createElement("div");
      note.className = "note";
      note.style.left = e.pageX + "px";
      note.style.top = e.pageY + "px";
      document.body.appendChild(note);

      setTimeout(function () {
        note.remove();
      }, 1000); 
    }, 200);
  },
};

document.addEventListener("DOMContentLoaded", star.init);