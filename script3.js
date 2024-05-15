const radioEvent = {
  body: document.querySelector('body'),
  radio: document.querySelector('#radio'),

  init: function () {
    radioEvent.radio.addEventListener("click", radioEvent.radioToggle);
  },

  radioToggle: function () {
    radioEvent.radio.classList.toggle("on");
    if (radioEvent.radio.classList.contains("on")) {
      document.querySelector(".styles").innerHTML ='<link class="style2" href="style2.css" rel="stylesheet">';
      } else {
      document.querySelector(".style2").remove();
     }
  },
};

document.addEventListener("DOMContentLoaded", radioEvent.init);